var mapContainer = document.getElementById('map');

const trafficOn = document.querySelectorAll('.traffic li')[0];
const trafficOff = document.querySelectorAll('.traffic li')[1];

const branchBtns = document.querySelectorAll('.branch li');

let drag = true;
let zoom = true;

var mapOption = {
	center: new kakao.maps.LatLng(37.5049693, 127.0042386),
	level: 3,
};

var map = new kakao.maps.Map(mapContainer, mapOption);

var markerOptions = [
	{
		title: 'Gangnam',
		latlng: new kakao.maps.LatLng(37.5049693, 127.0042386),
		imgSrc: 'images/marker.png',
		imgSize: new kakao.maps.Size(60, 55),
		button: branchBtns[0],
	},
	{
		title: 'Yeouido',
		latlng: new kakao.maps.LatLng(37.5258975, 126.9284261),
		imgSrc: 'images/marker.png',
		imgSize: new kakao.maps.Size(60, 55),
		button: branchBtns[1],
	},
	{
		title: 'Apgujeong',
		latlng: new kakao.maps.LatLng(37.5279242, 127.0416582),
		imgSrc: 'images/marker.png',
		imgSize: new kakao.maps.Size(60, 55),
		button: branchBtns[2],
	},
];

for (let i = 0; i < markerOptions.length; i++) {
	new kakao.maps.Marker({
		map: map,
		position: markerOptions[i].latlng,
		title: markerOptions[i].title,
		image: new kakao.maps.MarkerImage(
			markerOptions[i].imgSrc,
			markerOptions[i].imgSize,
		),
	});

	markerOptions[i].button.onclick = (e) => {
		e.preventDefault();
		for (let k = 0; k < markerOptions.length; k++) {
			markerOptions[k].button.classList.remove('on');
		}
		markerOptions[i].button.classList.add('on');

		moveTo(markerOptions[i].latlng);
	};
}

window.onresize = () => {
	let active_btn = document.querySelector('.branch li.on');
	let active_index = active_btn.getAttribute('data-index');

	map.setCenter(markerOptions[active_index].latlng);
};

trafficOn.addEventListener('click', (e) => {
	e.preventDefault();
	if (trafficOn.classList.contains('on')) return;
	map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	trafficOn.classList.add('on');
	trafficOff.classList.remove('on');
});

trafficOff.addEventListener('click', (e) => {
	e.preventDefault();
	if (trafficOff.classList.contains('on')) return;
	map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	trafficOff.classList.add('on');
	trafficOn.classList.remove('on');
});

var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

setDraggable(drag);
function setDraggable(draggable) {
	map.setDraggable(draggable);
}
setZoomable(zoom);
function setZoomable(zoomable) {
	map.setZoomable(zoomable);
}

function moveTo(target) {
	var moveLatLon = target;
	map.setCenter(moveLatLon);
}
