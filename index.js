console.log("Code your solution!")
let fh = {
  title:document.createElement("h1"),
  form:document.createElement("form"),
  p:document.createElement("p"),
  ul:document.createElement("ul"),
};

for(let x in fh) document.body.append(fh[x]);

fh['input']=document.createElement("textarea");
fh['input'].style="display:block;width:90%;";
fh['input'].setAttribute("rows",10);
fh['submit']=document.createElement("button");
fh['submit'].innerHTML = "Submit";
fh.submit.setAttribute("type","submit");
fh['form'].append(fh.input,fh.submit);

fh['form'].addEventListener("submit",(evt)=>{
  evt.preventDefault();
  fh['p'].innerHTML="";
  if(fh['input'].value=="")
  {
    fh['p'].innerHTML=`Error. Todo cannot be empty`;
    return;    
  }

  let text_list = fh['input'].value.split(`\n`);
  for(let x of text_list) 
  {
    x = trim(x);
    if(x=="") continue;
    create_sub_li(x);
  }
  fh['input'].value="";
});

////////
let style = document.createElement('style');
style.innerHTML= `
  .crossline{text-decoration: ;}
  .li_heading{}
`;
document.querySelector('head').appendChild(style);
function create_sub_li(text)
{
  let li = document.createElement("li");
  let span = document.createElement("span");
  let button = document.createElement("button");
  span.style="font-size: xx-large;font-weight: bold;margin:10px;";
  span.innerHTML = text;
  button.innerHTML = "Remove";
  li.append(span,button);
  li['fakehost']={span,button};
  li.addEventListener("click",li_on_click.bind(li));
  button.addEventListener("click",(evt)=>{
    evt.target.parentNode.remove();
  })
  fh["ul"].append(li);
}

function li_on_click(evt)
{
  //with bouns it comes a problem, if cross the li , will cross the button too, so 

  if(this.fakehost.span.style.textDecoration=="")
    this.fakehost.span.style.textDecoration = "line-through";
  else
    this.fakehost.span.style.textDecoration="";
  
  this.style.textDecoration=this.fakehost.span.style.textDecoration
}

function trim(text)
{
  let regex = /^\s*|\s*$/g;
  return text.replace(regex,"");
}