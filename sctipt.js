let loaddata = async () => {
    let res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    let data = await res.json();
    let tube = data.data
    // console.log(tube)
    displayphone(tube)
}
let section = document.getElementById('section');
let displayphone = (data) => {
    data.forEach(element => {
        let div1 = document.createElement("div");
        div1.classList = `m-2`
        div1.innerHTML = `
        <button onclick="handeltube('${element.category_id}')" class="btn"   >${element.category}</button>
        `
        section.appendChild(div1)
        // console.log(element.category)
    });
}
let handeltube = async (categoryid) => {
    let res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryid}`)
    let data = await res.json();
    // console.log(data.data)
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
let cardcontainer = document.getElementById('card-container')
cardcontainer.innerHTML = " ";


    if (data.data.length === 0) {
        // let cardcontainer1 = document.getElementById('card-container1');
        cardcontainer.innerHTML = " ";
        let div= document.createElement('div');
        div.innerHTML = " ";
        div.classList=`
        text-center items-center justify-center flex
        `
        div.innerHTML = `
        <div class="card w-96 bg-base-100 mt-6 h-screen mt-8">
        <figure><img class="w-60" src="./Icon.png" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="w- text-2xl">Oops!! Sorry, There is no content here</h2>
        </div>
      </div>
      `
        cardcontainer.appendChild(div)
        console.log(cardcontainer)
        // window.location.href = "nodata.html";
    }
    else {
        data.data.forEach(element => {

            let mind = element.others.posted_date % (60 * 60);
            let minutes = Math.floor(mind / 60);
            function toHoursAndMinutes(totalMinutes) {
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
                return hours + "hrs" + " " + minutes + "min ago";
            }
            let hour = toHoursAndMinutes(minutes)
            console.log(hour)
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            div1.classList = `card bg-base-100 shadow-xl `
            div1.innerHTML = `
        <div class="relative">
        <figure><img class="h-52" src=${element.thumbnail
                } alt="Shoes" /></figure>
        <div class="absolute bottom-0 right-0 text-white bg-gray-700">${hour}</div>
        </div>
        `
            element.authors.forEach(authordata => {
                div2.innerHTML = `
             <div class="card  ">
             <div class="card-body ">
               <div class="card-actions ">
               <img class="h-10 w-10 rounded-full " src=${authordata.profile_picture} alt="Shoes" />
               <p class="text-xl">${element.title}</p>
               </div>
               
               <div class="card-actions">
               <h3>${authordata.profile_name}
               </h3>
               <div class="w-10" >${authordata.verified == true ? " <img src='./image.png'>" : ''}</div>
               </div>
               <h4> ${element.others.views}</h4>
             </div>
           </div>
            `
                //  let fortnam=sort(element);
                //  console.log(fortnam)
            });
            cardcontainer.appendChild(div1)
            div1.appendChild(div2)
        })
    }
    // let sort=(element)=>{
    //     console.log(element.others.views)
    //   let number=parseFloat(element.others.views).split("k")[0];
    //   number.sort((a,b)=>{ 
    //    return b-a
    //   })
    //   console.log()
    // }
}
let blog = () => {
    let blogpass = document.getElementById('blog')
    window.location.href = "blog.html";
}
loaddata()


