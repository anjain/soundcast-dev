

myApp.controller('ReviewsCtrl', ['$scope', function($scope){

	$scope.reviews = [

		{
			title: 'Love My Melody!',
			description: 'We bump it in our office everyday! It fills up the loft space with amazing sound, you would think we had an expensive  surround sound system installed. Everyone fights over who gets to control the music each day via their Bluetooth phone. We love it!',
			date: '1/28/2014',
			author: 'Anita F.'
		},
		{
			title: 'Subject',
			description: 'I just got my melody. Read all reviews about it. People said too heavy and not enough bass. I can not say how much I love this speaker. Worth every cent.',
			date: '1/22/2014',
			author: 'Dave Karr'
		},
		{
			title: 'Style And Substance',
			description: "When Bluetooth speakers starting popping up everywhere I tried a handful of them and the seemed to all fall either on the bass heavy end or way too trebly. I was concerned Bluetooth technology just couldn't transmit the midrange which really fills out the sound for most rock n' roll",

			// full review: When Bluetooth speakers starting popping up everywhere I tried a handful of them and the seemed to all fall either on the bass heavy end or way too trebly. I was concerned Bluetooth technology just couldn't transmit the midrange which really fills out the sound for most rock n' roll sounds I enjoy. Enter the Melody. The midrange frequency sits just right in the mix. The omnidirectional orientation of the speakers is a phenomenal benefit hard to see the benefit until you use it. No more blasting the volume as you roam around the beach playing or whatever out door activity you enjoy. Just place the speaker in a central location. Fantastic concept for an active lifestyle. The fact the buttons can control which song is playing without reaching into your phone is a HUGE bonus. All your friends with other inferior speakers will be jealous of this.
			date: '10/30/2013',
			author: 'Mark H.'
		},
		{
			title: 'Great Sounding/Looking Speaker Package',
			description: 'Received a Melody recently. Set up/pairing with my Droid phone was easy. Sound is excellent. Design is simple but robust ... durable and stylish. Controls and instructions are simple and easy to understand. Take anywhere possibility is great ... can see it going on road trips or hanging',
			date: '10/19/2013',
			author: 'Larry Anderson'
		},
		{
			title: "Don't settle for sub-par wireless bluetooth speakers, you wont find a better speaker out there!",
			description: "When I first listened to the Melody I was blown away by the quality and sound of the speaker. The battery is rechargeable and lasts all day (which is more than i can say for the beats by dre). You can literally take this product anywhere whether it be the beach, the office, the golf course",

			// full review: When I first listened to the Melody I was blown away by the quality and sound of the speaker. The battery is rechargeable and lasts all day (which is more than i can say for the beats by dre). You can literally take this product anywhere whether it be the beach, the office, the golf course, or anywhere your heart desires. Don't settle for sub-par wireless bluetooth speakers, you wont find a better speaker out there!

			date: '10/10/2013',
			author: 'Mike Martinez'
		},
		{
			title: 'Love it!',
			description: 'Love the versatility and ease of use of the Melody!  We had a block party with over 250 people and the Melody led our entertainment charge effortlessly! Great work on your latest product.  Unbelievable quality and super easy to use right out of the box!',
			date: '9/30/2013',
			author: ' Jamie Reid'
		},
		{
			title: 'Soundcast provides music to the Intrepid Sportfishing Vessels',
			description: "The OutCast sound system is an all around great addition to our vessel. Waterproof, shockproof, and user friendly, the OutCast is a must have for any large vessel.",
			date: '9/24/2013',
			author: 'Captain Kevin Osborne'
		},
		{
			title: 'GeetBeat.tv Review',
			description: "The [Melody] really is for anywhere, anything--the pool, camping, tailgaiting, events! It sounds great, it's portable, it's light. Copy Link to Review: http://bit.ly/19EpgTE",
			date: '9/23/2013',
			author: 'Cali Lewis'
		},
		{
			title: "Melody isn't just an audio device, she's an essential member of my busy family!",
			description: "I have a new best friend; her name is Melody! She is sexy, smart, easy-to-use and has quickly become one of the most essential audio devices I’ve ever owned. When I’m cooking, she serenades me with sweet jazz in her full-range sound; when I am streaming Netflix by the fire",

			// full review: I have a new best friend; her name is Melody! She is sexy, smart, easy-to-use and has quickly become one of the most essential audio devices I’ve ever owned. When I’m cooking, she serenades me with sweet jazz in her full-range sound; when I am streaming Netflix by the fire in my sitting room she provides me with mini home-theater audio; and when I’m entertaining or at a Seahawks tailgate she offers my friends a chance to pair up and jump in on the music set! I have her paired to my computer, phone and tablet, easily switching between devices. As if I needed more reasons to love her, her battery life is amazing. I plug her in once every two weeks for a quick recharge, then she’s all set to go. Melody isn’t just an audio device, she’s an essential member of my busy family!

			date: '9/10/2013',
			author: 'Charity Hardwick'
		},
		{
			title: 'I love music even more with Melody',
			description: "First, let me establish this point:  I love music. I listen to it during work. I listen a lot when I'm off work, too. And I am thrilled with my Melody. It's sound quality is outstanding. It's very easy to use. It's the best bluetooth speaker I've heard, and I've heard many of them. Its battery life is phenomenal",

			// full review: First, let me establish this point:  I love music. I listen to it during work. I listen a lot when I'm off work, too. And I am thrilled with my Melody. It's sound quality is outstanding. It's very easy to use. It's the best bluetooth speaker I've heard, and I've heard many of them. Its battery life is phenomenal--around 20 hours of awesome listening pleasure before having to recharge again. Now let me establish this new point:  I love music even more with my Melody.

			date: '9/3/2013',
			author: 'Dean'
		},
		{
			title: "I highly recommend this speaker! It is definitely a step above the rest!",
			description: "When I received my Melody, I was very impressed by the packaging and overall presentation. The box has everything organized neatly and the layout ensures that your Melody is not damaged from shipment. All of the components have a great fit and finish and they appear to be very durable.",

				// full review: When I received my Melody, I was very impressed by the packaging and overall presentation. The box has everything organized neatly and the layout ensures that your Melody is not damaged from shipment. All of the components have a great fit and finish and they appear to be very durable. I especially like the fact that there are no extra adapters needed and everything is included.

			date: '9/1/2013',
			author: 'Phil Dupree'
		}


	];

	$scope.outcasts = [
		{
			title: 'Outcast',
			description: 'I LOVE this speaker. I plug my phone into it and play Spotify through it. It has become very popular at neighborhood parties too. Great sound and portable. Fantastic product.',
			date: '2/1/2014',
			author: 'Dave Karr'

		},
		{
			title: 'Just Awesome......',
			description: 'I had this speaker in my house for a couple of weeks and it was just awesome the quality of the sound and the number of hours it could deliver that same quality of sound......just amazing...i just hope someday i can have one of this just for me =)',
			date: '1/28/2014',
			author: 'Anita F.'
		}
	];




}]);