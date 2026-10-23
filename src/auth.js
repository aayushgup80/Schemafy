(() => {
 const USERS_KEY='schemafy.local.users.v1';
 const SESSION_KEY='schemafy.local.session.v1';
 const modeParam=new URLSearchParams(location.search).get('mode');
 let mode=modeParam==='signup'?'signup':'login';
 const form=document.querySelector('#auth-form');
 const nameLabel=document.querySelector('#name-label');
 const error=document.querySelector('#auth-error');
 function getUsers(){try{return JSON.parse(localStorage.getItem(USERS_KEY)||'[]')}catch{return []}}
 function render(){
  const signup=mode==='signup';
  document.title=(signup?'Create account':'Sign in')+' — Schemafy';
  document.querySelector('#form-eyebrow').textContent=signup?'GET STARTED':'WELCOME BACK';
  document.querySelector('#form-title').textContent=signup?'Create your account':'Sign in to Schemafy';
  document.querySelector('#form-subtitle').textContent=signup?'Your database workspace starts here.':'Pick up where your ideas left off.';
  document.querySelector('#submit-button').innerHTML=signup?'Create account <span>→</span>':'Sign in <span>→</span>';
  document.querySelector('#switch-text').textContent=signup?'Already have an account?':'New to Schemafy?';
  document.querySelector('#switch-mode').textContent=signup?'Sign in':'Create an account';
  nameLabel.hidden=!signup;
  form.elements.password.autocomplete=signup?'new-password':'current-password';
  error.hidden=true;
 }
 document.querySelector('#switch-mode').addEventListener('click',()=>{mode=mode==='login'?'signup':'login';render()});
 form.addEventListener('submit',e=>{
  e.preventDefault();error.hidden=true;
  const fd=new FormData(form),email=String(fd.get('email')||'').trim().toLowerCase(),password=String(fd.get('password')||''),name=String(fd.get('displayName')||'').trim()||email.split('@')[0];
  const users=getUsers();
  if(mode==='signup'){
   if(users.some(u=>u.email===email)){showError('An account with this email already exists in this browser. Sign in instead.');return}
   const user={id:crypto.randomUUID(),email,name,password,createdAt:new Date().toISOString()};
   users.push(user);localStorage.setItem(USERS_KEY,JSON.stringify(users));
   localStorage.setItem(SESSION_KEY,JSON.stringify({id:user.id,email:user.email,name:user.name}));
   location.href='./app.html';return;
  }
  const user=users.find(u=>u.email===email&&u.password===password);
  if(!user){showError('Email or password is incorrect. If this is your first time here, create an account.');return}
  localStorage.setItem(SESSION_KEY,JSON.stringify({id:user.id,email:user.email,name:user.name}));
  location.href='./app.html';
 });
 function showError(message){error.textContent=message;error.hidden=false}
 try{if(localStorage.getItem(SESSION_KEY))location.replace('./app.html')}catch{}
 render();
})();