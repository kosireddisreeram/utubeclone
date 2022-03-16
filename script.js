const search_results_div=document.getElementById("search_results");
const searchVideos = async()=>{
try{

    let inp= document.getElementById("search").value;

    let res =await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyDamA1rjWD8j7CISrnjy9Rb_3nrpWmTChI&maxResults=50`
        );
        // we need to pass maxResults to know how many results we need to get 50 is the max limit on the limits
let data =await res.json();
console.log(data)
let videos=data.items;
console.log(videos);
appendVideos(videos);

// return videos;
}
catch(error){
console.log(error)
}

};
// searchVideos()

const appendVideos= (data) => {
    search_results_div.innerHTML=null;
data.forEach(({snippet:{title},id:{videoId}})=>{
let div=document.createElement('div');
let name =document.createElement('p');
name.innerText=title;
let iframe= document.createElement('iframe')
iframe.src=`https://www.youtube.com/embed/${videoId}`;
iframe.height="100%";
iframe.width="100%";
iframe.allow='fullscreen';
div.append(iframe,name);
   search_results_div.append(div);
})
}