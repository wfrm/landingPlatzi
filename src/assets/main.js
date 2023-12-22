const url = 'https://youtube-v2.p.rapidapi.com/channel/videos?channel_id=UCqd0TdnurUpgXcdYMqTiP4A';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48127c92a4mshfd3cb48b879fa69p1c5ebajsnc36c992bfc1f',
		'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
	}
};
/*
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}}*/
async function fetchData(url){
const response =await fetch(url,options)
const data =await response.json();
return data;
}

(async ()=>{
try{
    const videos =await fetchData(url)
    let view = `
    ${videos.videos.map(video=>`
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.thumbnails[0].url}" alt="${video.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.title}
      </h3>
    </div>
  </div>
    `).slice(0,4).join('')}

    `;
    content.innerHTML=view;
}
catch (error){
    console.log(error);
}
})();
