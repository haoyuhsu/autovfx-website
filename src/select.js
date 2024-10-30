var currentInstGardenList = [
    "merge_garden_fireball_break_vase", 
    "merge_garden_vase_melting",
    "merge_garden_vase_fracture",
    "merge_garden_bird_animation",
    "merge_garden_drop_basketballs",
    "merge_garden_pikachu_animation",
    "merge_garden_smoke_simulation",
    "merge_garden_vase_mirror",
    "merge_garden_vase_rbsim"
];
var currentInstGardenDescriptions = [
    "Throw a basketball with fire towards vase with flowers and break the vase with collision.",
    "Melt the vase with flowers into liquid.",
    "Make the vase with flowers break.",
    "Make a bird flying around and above the table.",
    "Drop 5 basketballs on the table.",
    "Insert an animated pikachu on the table.",
    "Insert a computer on the table and make it emit smoke.",
    "Make the vase with flowers to be like a mirror.",
    "Make the vase with flowers 1.5 time bigger, then make it drop onto the table."
];
var currentInstGarden = "merge_garden_fireball_break_vase";
var currentInstGardenId = 0;

function ChangeInstGarden(idx){
    var li_list = document.getElementById("inst-garden-view-ul").children;
    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }
    li_list[idx].className = "active";

    currentInstGarden = currentInstGardenList[idx];
    currentInstGardenId = idx;

    document.getElementById("inst-garden_video").src = "src/videos/ours_merge/"+ currentInstGarden + '.mp4';
    document.getElementById("inst-garden-description").innerHTML = currentInstGardenDescriptions[idx];
}


var currentInstIndoorList = [
    "merge_office_animated_dragon",
    "merge_office_ironman_smoke",
    "merge_room2_campfire",
    "merge_room_drop_barrels"
];
var currentInstIndoorDescriptions = [
    "Insert an animated dragon moving above and around the floor.",
    "Put a Tony Stark on the floor covered with smoke.",
    "Setup a camp fire in the middle of the floor.",
    "Drop four barreles onto the floor: one mirror-like, one with fabric textures, one resembling pavement, and one unchanged."
];
var currentInstIndoor = "merge_office_animated_dragon";
var currentInstIndoorId = 0;

function ChangeInstIndoor(idx){
    var li_list = document.getElementById("inst-indoor-view-ul").children;
    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }
    li_list[idx].className = "active";

    currentInstIndoor = currentInstIndoorList[idx];
    currentInstIndoorId = idx;

    document.getElementById("inst-indoor_video").src = "src/videos/ours_merge/"+ currentInstIndoor + '.mp4';
    document.getElementById("inst-indoor-description").innerHTML = currentInstIndoorDescriptions[idx];
}


var currentInstOutdoorList = [
    "merge_waymo_1776_traffic_accident",
    "merge_waymo_1776_move_towards",
    "merge_waymo_9385_fire_car_drop",
    "merge_family_break_sculpture_v5",
    "merge_horse_break_sculpture_v8"
];
var currentInstOutdoorDescriptions = [
    "Insert a physics-enabled Benz G 20 meters in front of us with random 2D rotation. Add a Ferriari moving forward.",
    "Add a Benz_S driving towards us.",
    "Drop a Benz G with fire randomly in 10 meters front of our vehicles and from 3 meters high.",
    "Break the sculpture.",
    "Break the sculpture."
];
var currentInstOutdoor = "merge_office_animated_dragon";
var currentInstOutdoorId = 0;

function ChangeInstOutdoor(idx){
    var li_list = document.getElementById("inst-outdoor-view-ul").children;
    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }
    li_list[idx].className = "active";

    currentInstOutdoor = currentInstOutdoorList[idx];
    currentInstOutdoorId = idx;

    document.getElementById("inst-outdoor_video").src = "src/videos/ours_merge/"+ currentInstOutdoor + '.mp4';
    document.getElementById("inst-outdoor-description").innerHTML = currentInstOutdoorDescriptions[idx];
}


// var currentSimList = ["flood", "snow", "smog"];
// var currentSim = "flood";
// var currentSimId = 0;
// var currentSceneList = ["playground", "family","truck", "train", "horse", "garden", "1538", "1728", "1908"];
// var currentScene = "playground";
// var currentSceneId = 0;
// var currentMethodList = ["ours", "GAN", "Diffusion", "Swap", "Sty"];
// var currentMethod = "ours";

// vid = document.getElementById("showoff-img");
// vid.playbackRate = 0.40;	

// function ChangeDataset(){
//     var dataset = document.getElementById("dataset-select").value.split(" ")[0];
//     var frame_total = parseInt(document.getElementById("dataset-select").value.split(" ")[1]);
//     document.getElementById("frame-total").innerHTML = frame_total;
//     document.getElementById("frame-idx-input").value = 1;
//     document.getElementById("frame-idx-input").max = frame_total;
//     ChangeFrame();
// }

// function ChangeFrame(){
//     // var dataset = document.getElementById("dataset-select").value.split(" ")[0];
//     // var frame_idx = parseInt(document.getElementById("frame-idx-input").value);
//     // document.getElementById("frame-idx").innerHTML = ("00" + frame_idx).slice(-2);
//     console.log(currentSim);
//     console.log(currentScene);
//     document.getElementById("simulation_video").src = "ClimateNeRF_files/ours/"+ currentSim + '/' + currentScene + '.mp4';

//     // document.getElementById("showoff-label").src = "visual_comparison/label/" +dataset +'_' +("00" + frame_idx).slice(-2) + '.png';

//     // vid = document.getElementById("simulation_video");
//     // vid.playbackRate = 1;	
// }

// function NextFrame(){
//     var frame_total = parseInt(document.getElementById("dataset-select").value.split(" ")[1]);
//     var frame_idx = parseInt(document.getElementById("frame-idx-input").value);
//     if(frame_idx < frame_total){
//         document.getElementById("frame-idx-input").value = frame_idx + 1;
//         ChangeFrame();
//     }
// }

// function PrevFrame(){
//     var frame_idx = parseInt(document.getElementById("frame-idx-input").value);
//     if(frame_idx > 1){
//         document.getElementById("frame-idx-input").value = frame_idx - 1;
//         ChangeFrame();
//     }
// }

// function ChangeSim(idx){
//     var li_list = document.getElementById("sim-view-ul").children;
//     console.log(idx);
//     console.log(li_list);
//     for(i = 0; i < li_list.length; i++){
//         li_list[i].className = "";
//     }
//     li_list[idx].className = "active";

//     currentSim = currentSimList[idx];
//     currentSimId = idx;

//     var m_list = document.getElementById("method-view-ul").children;
//     m_list[0] = "active";
//     for (i=1;i<m_list.length;i++){
//         m_list[i].className = "disabled";
//         console.log(m_list[i].children[0].onclick)
//         m_list[i].children[0].onclick = "";
//     }
//     console.log("###")
//     for (i=0;i<m_list.length;i++){
//         console.log(m_list[i].children[0].onclick)
//     }
//     if(currentSceneId<5){
//         if(idx==0){
//             m_list[1].className = "";
//             m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
//             m_list[2].className = "";
//             m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
//         }
//         else if(idx==1){
//             m_list[3].className = "";
//             m_list[3].children[0].onclick = function func(){ChangeMethod(3);}
//             m_list[4].className = "";
//             m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
//         }
//         else if(idx==2){
//             m_list[1].className = "";
//             m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
//             m_list[4].className = "";
//             m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
//         }
//     }

//     document.getElementById("simulation_video").src = "ClimateNeRF_files/ours/"+ currentSim + '/' + currentScene + '.mp4';
//     ChangeMethod(0);
// }

// function ChangeScene(idx){
//     var li_list = document.getElementById("scene-view-ul").children;
//     var m_list = document.getElementById("method-view-ul").children;
//     console.log(idx);
//     console.log(li_list);

//     for(i = 0; i < li_list.length; i++){
//         li_list[i].className = "";
//     }

//     m_list[0].className = "active";
//     if (idx>=5){
//         li_list[idx+1].className = "active";
//         for (i=1;i<m_list.length;i++){
//             m_list[i].className = "disabled";
//             m_list[i].children[0].onclick = "";
//         }
//     }
//     else{
//         li_list[idx].className = "active";
//         if(currentSimId==0){
//             m_list[1].className = "";
//             m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
//             m_list[2].className = "";
//             m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
//         }
//         else if(currentSimId==1){
//             m_list[3].className = "";
//             m_list[3].children[0].onclick = function func(){ChangeMethod(3);}
//             m_list[4].className = "";
//             m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
//         }
//         else if(currentSimId==2){
//             m_list[1].className = "";
//             m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
//             m_list[4].className = "";
//             m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
//         }
//     }
    
//     currentScene = currentSceneList[idx];
//     currentSceneId = idx;

//     let video = document.getElementById("simulation_video")
//     let container = video.parentNode
//     video.src = "ClimateNeRF_files/ours/"+ currentSim + '/' + currentScene + '.mp4';

//     container.style = "width: 100%; opacity: 0;"
//     setTimeout(()=>{
//         container.style = "width: 100%; opacity: 1;"
//         video.load();
//     }, 1000)

//     ChangeMethod(0);
// }

// function ChangeMethod(idx){
//     var li_list = document.getElementById("method-view-ul").children;
//     console.log(idx);
//     console.log(li_list);
//     for(i = 0; i < li_list.length; i++){
//         if (li_list[i].className === "disabled"){
//             continue
//         }
//         li_list[i].className = "";
//     }
//     li_list[idx].className = "active";
//     currentMethod = currentMethodList[idx]
//     document.getElementById("baseline").src = "ClimateNeRF_files/" + currentMethod +'/'+ currentSim +'/'+ currentScene + '.mp4';
//     if(idx == 0){
//         document.getElementById("ours").style="width:100%";
//         document.getElementById("baseline").style="width:0%";
//     }
//     else if(idx >= 1){
//         document.getElementById("ours").style="width:0%";
//         document.getElementById("baseline").style="width:100%";
//     }
// }