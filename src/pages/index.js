import Homepage from '@app/homepage';

const mainBannerImages = [
	{ 
		mobile:"https://thumbor.sirclocdn.com/unsafe/1800x750/filters:format(webp)/https://swiftpwa-be.testingnow.me/media/weltpixel/owlcarouselslider/images/h/7/h7_h1.jpg",
		desktop: "https://thumbor.sirclocdn.com/unsafe/1800x750/filters:format(webp)/https://swiftpwa-be.testingnow.me/media/weltpixel/owlcarouselslider/images/h/7/h7_h1.jpg",
		alt: "Surprise Deals December"
	},
	{ 
		mobile:"https://thumbor.sirclocdn.com/unsafe/1800x750/filters:format(webp)/https://swiftpwa-be.testingnow.me/media/weltpixel/owlcarouselslider/images/h/7/h7_h1.jpg",
		desktop: "https://thumbor.sirclocdn.com/unsafe/1800x750/filters:format(webp)/https://swiftpwa-be.testingnow.me/media/weltpixel/owlcarouselslider/images/h/7/h7_h1.jpg",
		alt: "Surprise Deals December"
	},
];

const featuredProductsImages = [
	{ 
		mobile:"https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/image_2x.png",
		desktop: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/image_2x.png",
		alt: "Surprise Deals December"
	},
	{ 
		mobile:"https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/image_2x.png",
		desktop: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/image_2x.png",
		alt: "Surprise Deals December"
	},
];

const fetchData = async () => {
	return Promise.all([
		fetch("https://fakestoreapi.com/products"),
		fetch("https://fakestoreapi.com/products/categories")
	]).then((response)=>{
		return Promise.all( response.map((data) => data.json()) );
	}).then((result) => {
		return {
			products: result[0],
			categories: result[1]
		}
	})
}

export const getServerSideProps = async () => {
	const data = await fetchData();

	return {
		props:{
			banner: mainBannerImages,
			featuredImages: featuredProductsImages,
			...data
		}
	}
}

export default Homepage;