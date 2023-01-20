const fromText=document.querySelector(".from-text"),
toText=document.querySelector(".to-text"),
selectTag=document.querySelectorAll("select"),
translateBtn= document.querySelector("button");

selectTag.forEach((tag ,id)=>{
  
    for (const country_code in countries) {
        let selected;
          if(id==0 &&  country_code == "en-GB"){
            selected= "selected";

          }
           else if(id==1 &&  country_code == "hi-IN"){
            selected="selected";      
         }  
        let Option=`<option value ="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend",Option);

            
        }
     } );

     translateBtn.addEventListener("click",()=>{
        let text = fromText.value,
        translatFrom =selectTag[0].value,
        translatTo =  selectTag[1].value;
        let apiUrl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translatFrom}|${translatTo}`;

        fetch(apiUrl).then(res => res.json()).then(data => {
            console.log(data);
            toText.value = data.responseData.translatedText;
        });

     });