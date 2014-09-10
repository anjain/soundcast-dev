myApp.controller('pressCtrl', function($scope){
	$scope.brands=[
	{
		title: 'Melody Brand Guide',
		image: 'http://cdn.gosoundcast.com/partner_resources/resources/Melody-Guide.png',
		download: 'http://cdn.gosoundcast.com/partner_resources/Soundcast-Melody-Brand-Guide-Final-lr.pdf',
	},
	{
		title: 'Full Line Brochure',
		image: 'http://cdn.gosoundcast.com/partner_resources/resources/full-line-brochure.png',
		download: 'http://cdn.gosoundcast.com/partner_resources/resources/SCS-FullLineBrochure-SinglePgs-FINAL.pdf',
	}

	];

	$scope.boxs=[
	{
		title: 'Soundcast Logos',
		image: 'http://cdn.gosoundcast.com/partner_resources/resources/soundcast.png',
		low: 'http://cdn.gosoundcast.com/partner_resources/resources/Soundcast-logo-newtag-orange+white-2011.zip',
		high: 'http://cdn.gosoundcast.com/partner_resources/resources/Soundcast-logo-newtag-orange+white-2011.zip'
	},
	{
		title: 'Melody Logos',
		image: 'http://cdn.gosoundcast.com/partner_resources/resources/melody1.png',
		low: 'http://cdn.gosoundcast.com/partner_resources/resources/Melody-ID-Final.zip',
		high: 'http://cdn.gosoundcast.com/partner_resources/resources/Melody-ID-Final.zip'
	},
	{
		title: 'Melody',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-2.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-2.jpg'
	},
	{
		title: 'Boat At Sea',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-boat-sea-explorer.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Boat-Sea-Exterior-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Boat-Sea-Exterior-hr.jpg'
	}

	];

	$scope.items=[
	{
		title: 'Soundcast Logos',
		image: 'http://cdn.gosoundcast.com/partner_resources/resources/soundcast.png',
		low: 'http://cdn.gosoundcast.com/partner_resources/resources/Soundcast-logo-newtag-orange+white-2011.zip',
		high: 'http://cdn.gosoundcast.com/partner_resources/resources/Soundcast-logo-newtag-orange+white-2011.zip'
	},
	{
		title: 'Melody Logos',
		image: 'http://cdn.gosoundcast.com/partner_resources/resources/melody1.png',
		low: 'http://cdn.gosoundcast.com/partner_resources/resources/Melody-ID-Final.zip',
		high: 'http://cdn.gosoundcast.com/partner_resources/resources/Melody-ID-Final.zip'
	},
	// {
	// 	title: 'Icons',
	// 	image: 'http://cdn.gosoundcast.com/partner_resources/resources/icons-th.jpg',
	// 	low: 'http://cdn.gosoundcast.com/partner_resources/resources/SCS-Melody-Features-Icons.zip',
	// 	high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-BBQ-hr.jpg'
	// },
	// {
	// 	title: 'Fonts',
	// 	image: 'http://cdn.gosoundcast.com/partner_resources/resources/fonts-th.jpg',
	// 	low: 'http://cdn.gosoundcast.com/partner_resources/SCS-Melody-Fonts.zip',
	// 	high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-BBQ-hr.jpg'
	// },
	// {
	// 	title: 'Flags',
	// 	image: 'http://cdn.gosoundcast.com/partner_resources/resources/flags-th.jpg',
	// 	low: 'http://cdn.gosoundcast.com/partner_resources/resources/Melody-Flags.zip',
	// 	high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-BBQ-hr.jpg'
	// },
	// {
	// 	title: 'Documents',
	// 	image: 'http://cdn.gosoundcast.com/partner_resources/resources/product-th.jpg',
	// 	low: 'http://cdn.gosoundcast.com/partner_resources/resources/SCS-Melody-Short-Description-300word.docx'
	// },
	// {
	// 	title: 'Textures',
	// 	image: 'http://cdn.gosoundcast.com/partner_resources/resources/textures-th.jpg',
	// 	low: 'http://cdn.gosoundcast.com/partner_resources/resources/Melody-Textures.zip',
	// 	high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-BBQ-hr.jpg'
	// },
	{
		title: 'Melody With BBQ',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-bbq.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-BBQ-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-BBQ-hr.jpg'

	},
	{
		title: 'Melody In Bedroom',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-bedroom.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Bedroom-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Bedroom-hr.jpg'
	},
	{
		title: 'Melody Boat Cabin Interior',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-boat-cabin-interior.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Boat-Cabin-Interior-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Boat-Cabin-Interior-hr.jpg'
	},
	{
		title: 'Melody Boat At Sea',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-boat-sea-explorer.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Boat-Sea-Exterior-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Boat-Sea-Exterior-hr.jpg'
	},
	{
		title: 'Melody Woman Carrying',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-female.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-female-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-female-hr.jpg'
	},
	{
		title: 'Melody On Grass',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-grass.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Grass-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Grass-hr.jpg'
	},
	{
		title: 'Melody By BBQ Grill',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-green-egg-exterior.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Green_Egg-Exterior-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Green_Egg-Exterior-hr.jpg'
	},
	{
		title: 'Melody At Parties',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-green-egg-people.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Green-Egg-People-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Green-Egg-People-hr.jpg'
	},
	{
		title: 'Melody In Kitchen',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-kitchen-cooking.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Kitchen-Cooking-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Kitchen-Cooking-hr.jpg'
	},
	{
		title: 'Melody In Living Room',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-living-room.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Livingroom-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Livingroom-hr.jpg'
	},
	{
		title: 'Melody At Picnic',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-picnic-exterior.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Picnic-Exterior-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Picnic-Exterior-hr.jpg'
	},
	{
		title: 'Melody A Picnic Toast',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-picnic-toast.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Picnic-Toast-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Picnic-Toast-hr.jpg'
	},
	{
		title: 'Melody By the Pool',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-pool-couple.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Pool-Couple-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Pool-Couple-hr.jpg'
	},
	{
		title: 'Melody While Relaxing',
		image: 'http://cdn.gosoundcast.com/partner_resources/melody/lifestyle/melody-woman-reading.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Woman-Reading-hr-lr.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/Melody-Woman-Reading-hr.jpg'
	},
	{
		title: 'Melody',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-2.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-2.jpg'
	},
	{
		title: 'Melody (trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-2-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-2-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-2-trans.png'
	},
	{
		title: 'Melody Angle',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-1.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-1.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-1.jpg'
	},
	{
		title: 'Melody Angle (Trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-1-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-1-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-1-trans.png'
	},
	{
		title: 'Melody Side',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-3.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-3.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-3.jpg'
	},
	{
		title: 'Melody Side (Trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-3-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-3-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-3-trans.png'
	},
	{
		title: 'Melody Connection (Closed)',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-connection-closed.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-connection-closed.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-connection-closed.jpg'
	},
	{
		title: 'Melody Connection (Opened)',
		image:'http://cdn.gosoundcast.com/partner_resources/melody/product/melody-connection-open.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Melody/melody-connection-open.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Melody/melody-connection-open.jpg'
	},
	{
		title: 'OutCast Grilling',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/lifestyle/outcast-bbq.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/OutCast-BBQ-Exterior.png',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/OutCast-BBQ-Exterior.tif'
	},
	{
		title: 'OutCast On Deck',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/lifestyle/outcast-deck.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/Outcast-deck.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/Outcast-deck.jpg'
	},
	{
		title: 'OutCast With BBQ',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/lifestyle/outcast-green-egg-low.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-green-egg-low.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/OutCast-Green-Egg-low.tiff'
	},
	{
		title: 'OutCast Illuminated Keypad',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/lifestyle/outcast-keypad.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-keypad.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/OutCast-Keypad-Illuminated-Top.tiff'
	},
	{
		title: 'OutCast Living Room',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/lifestyle/outcast-livingroom.jpg',
		low: 'http://cdn.gosoundcast.com/outcast-livingroom.jpg',
		high: 'http://cdn.gosoundcast.com/outcast-livingroom.jpg'
	},
	{
		title: 'OutCast With Bluecast',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/lifestyle/outcast-loft.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-loft.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/BluCast-Loft.tiff'
	},
	{
		title: 'OutCast',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-front.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-front.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-front.jpg'
	},
	{
		title: 'OutCast Front',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-front-2.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-front-2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-front-2.jpg'
	},
	{
		title: 'OutCast Front (trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-front-2-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-front-2-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-front-2-trans.png'
	},
	{
		title: 'OutCast Cover',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-cover.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-cover.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-cover.jpg'
	},
	{
		title: 'OutCast Top',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-top.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-top.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-top.jpg'
	},
	{
		title: 'OutCast Top (trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-top-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-top-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-top-trans.png'
	},
	{
		title: 'OutCast Bass Driver',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-bass.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-bass.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-bass.jpg'
	},
	{
		title: 'OutCast Bass Port',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-bassport.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-bassport.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-bassport.jpg'
	},
	{
		title: 'OutCast Carried',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-carried.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-carried.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-carried.jpg'
	},
	{
		title: 'OutCast With iCast',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-icast.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-icast.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-icast.jpg'
	},
	{
		title: 'OutCast With UAT',
		image:'http://cdn.gosoundcast.com/partner_resources/outcast/product/outcast-uat.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-uat.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast/outcast-uat.jpg'
	},
	{
		title: 'OutCast Jr. On A Boat',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-boat.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Boat.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Boat.tiff'
	},
	{
		title: 'OutCast Jr. Out To Sea',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-boatdeck.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Boat-Deck.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Boat-Deck.tiff'
	},
	{
		title: 'OutCast Jr. On Boat Deck',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-deckexterior.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast_JR-Sailboat-Deck-Exterior.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast_JR-Sailboat-Deck-Exterior.tif'
	},
	{
		title: 'OutCast Jr. On Porch',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-deck.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Boat-Deck',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/Melody-BBQ-hr.jpg'
	},
	{
		title: 'OutCast Jr. Couple On A Picnic',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-couple.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-jr-picnic-park-couple.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-jr-picnic-park-couple.tiff'
	},
	{
		title: 'OutCast Jr. Picnic',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-picnic.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Picnic-Group.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Picnic-Group.tif'
	},
	{
		title: 'OutCast Jr. With Table',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-table.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-jr-picnic-table.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-jr-picnic-table.tiff'
	},
	{
		title: 'OutCast Jr. By The Coast',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-parkbench.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-parkbench.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-parkbench.jpg'
	},
	{
		title: 'OutCast Jr. Snow',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-snow.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast Jr Snow Fence.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast Jr Snow Fence.jpg'
	},
	{
		title: 'OutCast Jr. Dog Approves',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-dog.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast Jr Snow Fence.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast Jr Snow Fence.jpg'
	},
	{
		title: 'OutCast Jr. Snowy Tree',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-tree.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Boat-Deck',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/Melody-BBQ-hr.jpg'
	},
	{
		title: 'OutCast Jr. Living Room',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-livingroom.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Livingroom.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Livingroom.tif'
	},
	{
		title: 'OutCast Jr. Inside Loft',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-loft.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Top-Loft.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/OutCast-Jr-Top-Loft.tiff'
	},
	{
		title: 'OutCast Jr. With Bluecast',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/lifestyle/outcastjr-bluecast-close.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/Bluecast-Outcst-Jr-Close.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/Bluecast-Outcst-Jr-Close.tif'
	},
{
		title: 'OutCast Jr.',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-front.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-front.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-front.jpg'
	},
	{
		title: 'OutCast Jr. (trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-front-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-front-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-front-trans.png'
	},
	{
		title: 'OutCast Jr. Top',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-top.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-top.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-top.jpg'
	},
	{
		title: 'OutCast Jr. Top (trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-top-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-top-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-top-trans.png'
	},
	{
		title: 'OutCast Jr. Bass Driver',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-bass2.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-bass2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-bass2.jpg'
	},
	{
		title: 'OutCast Jr. Wet',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-wet.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-wet.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-wet.jpg'
	},
	{
		title: 'OutCast Jr. With iCast',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-icast.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-icast.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-icast.jpg'
	},
	{
		title: 'OutCast Jr. With UAT',
		image:'http://cdn.gosoundcast.com/partner_resources/outcastjr/product/outcastjr-uat.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-uat.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Outcast-jr/outcastjr-uat.jpg'
	},
	{
		title: 'iCast Espresso',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/lifestyle/icast-espresso-1.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-espresso 1.2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-espresso 1.2.jpg'
	},
	{
		title: 'iCast Dash',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/lifestyle/icast-dash.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/icast-dash.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/icast-dash.jpg'
	},
	{
		title: 'iCast',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-front-2.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-front-2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-front-2.jpg'
	},
	{
		title: 'iCast Front',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-front-1.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-front-1.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-front-1.jpg'
	},
	{
		title: 'iCast Rear',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-rear-1.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-rear-1.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-rear-1.jpg'
	},
	{
		title: 'iCast Rear Right',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-rear-4.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-rear-4.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-rear-4.jpg'
	},
	{
		title: 'iCast Rear Left',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-rear-2.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-rear-2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-rear-2.jpg'
	},
	{
		title: 'iCast Top Rear',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-top-2.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-top-2.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-top-2.jpg'
	},
	{
		title: 'iCast Top Front',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-top-3.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-top-3.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-top-3.jpg'
	},
	{
		title: 'iCast With Phone',
		image:'http://cdn.gosoundcast.com/partner_resources/icast/product/iCast-iPhone.png',
		low: 'http://cdn.gosoundcast.com/press-img/icast/iCast-iPhone.png',
		high: 'http://cdn.gosoundcast.com/press-img/icast/iCast-iPhone.png'
	},
	{
		title: 'UAT With Computer',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/lifestyle/uat-mac-nospeaker.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-mac-nospeaker.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-mac-nospeaker.jpg'
	},
	{
		title: 'UAT and Music Library',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/lifestyle/uat-people.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-people.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-people.jpg'
	},
	{
		title: 'UAT',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/product/uat-front.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-front.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-front.jpg'
	},
	{
		title: 'UAT Front Angle',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/product/uat-front-angle-1.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-front-angle-1.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-front-angle-1.jpg'
	},
	{
		title: 'UAT Front Angle (trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/product/uat-front-angle-1-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-front-angle-1-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-front-angle-1-trans.png'
	},
	{
		title: 'UAT Rear',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/product/uat-rear.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-rear.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-rear.jpg'

	},
	{
		title: 'UAT Rear Angle',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/product/uat-rear-angle.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-rear-angle.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-rear-angle.jpg'
	},
	{
		title: 'UAT Side',
		image:'http://cdn.gosoundcast.com/partner_resources/uat/product/uat-side.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Uat/uat-side.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Uat/uat-side.jpg'
	},
	{
		title: 'SurroundCast',
		image:'http://cdn.gosoundcast.com/partner_resources/surroundcast/product/surroundcast-system-front.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-system-front.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-system-front.jpg'
	},
	{
		title: 'SurroundCast (trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/surroundcast/product/surroundcast-system-front-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-system-front-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-system-front-trans.png'
	},
	{
		title: 'SurroundCast Angle',
		image:'http://cdn.gosoundcast.com/partner_resources/surroundcast/product/surroundcast-receiver-front.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-receiver-front.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-receiver-front.jpg'
	},
	{
		title: 'SurroundCast Side',
		image:'http://cdn.gosoundcast.com/partner_resources/surroundcast/product/surroundcast-side.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-side.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-side.jpg'
	},
	{
		title: 'SurroundCast Side (both)',
		image:'http://cdn.gosoundcast.com/partner_resources/surroundcast/product/surroundcast-system-sides.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-system-sides.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-system-sides.jpg'
	},
	{
		title: 'SurroundCast Bottom (receiver)',
		image:'http://cdn.gosoundcast.com/partner_resources/surroundcast/product/surroundcast-receiver-bottom.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-receiver-bottom.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-receiver-bottom.jpg'
	},
	{
		title: 'SurroundCast Rear',
		image:'http://cdn.gosoundcast.com/partner_resources/surroundcast/product/surroundcast-rear.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-rear.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/Surroundcast/surroundcast-rear.jpg'
	},
	{
		title: 'SubCast on Sub',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/lifestyle/subcast-sub.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-sub.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-sub.jpg'
	},
	{
		title: 'SubCast',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/product/subcast-front.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-front.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-front.jpg'
	},
	{
		title: 'SubCast Angle',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/product/subcast-front-angle-1.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-front-angle-1.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-front-angle-1.jpg'
	},
	{
		title: 'SubCast Front Angle (Trans)',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/product/subcast-front-angle-1-trans.png',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-front-angle-1-trans.png',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-front-angle-1-trans.png'
	},
	{
		title: 'SubCast Rear',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/product/subcast-rear.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-rear.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-rear.jpg'
	},
	{
		title: 'SubCast Rear (Close)',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/product/subcast-rear-close.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-rear-close.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-rear-close.jpg'
	},
	{
		title: 'SubCast Side',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/product/subcast-side.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-side.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-side.jpg'
	},
	{
		title: 'SubCast Side Angle',
		image:'http://cdn.gosoundcast.com/partner_resources/subcast/product/subcast-side-angle.jpg',
		low: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-side-angle.jpg',
		high: 'http://cdn.gosoundcast.com/press-img/subcast/subcast-side-angle.jpg'
	}
],

$scope.videos=[
	{
		src: '//www.youtube.com/embed/5vTnzmwhYJg',
		title: 'Melody Video'
	},
	{
		src: '//www.youtube.com/embed/5vTnzmwhYJg',
		title: 'Melody Video'
	}
];

});