import Homepage from '@app/homepage';

const mainBannerImages = [
	{
		mobile: "https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner-02.jpg",
		desktop: "https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner_comp_.jpg",
		alt: "Surprise Deals December"
	},
	{
		mobile: "https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner-02.jpg",
		desktop: "https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner_comp_.jpg",
		alt: "Surprise Deals December"
	},
];

const featuredImages = [
	{
		mobile: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/image_2x.png",
		desktop: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/image_2x.png",
		alt: "Surprise Deals December"
	},
	{
		mobile: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/2021-03-28_07-18.png",
		desktop: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/2021-03-28_07-18.png",
		alt: "Surprise Deals December"
	},
	{
		mobile: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/2021-03-28_07-20.png",
		desktop: "https://thumbor.sirclocdn.xyz/unsafe/960x577/filters:format(webp)/https://bo.dima.testingnow.me/pub/media/catalog/category/2021-03-28_07-20.png",
		alt: "Surprise Deals December"
	},
];

const fetchData = async () => {
	return Promise.all([
		fetch("https://fakestoreapi.com/products"),
		fetch("https://fakestoreapi.com/products/categories")
	]).then((response) => {
		return Promise.all(response.map((data) => data.json()));
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
		props: {
			bannerImages: mainBannerImages,
			featuredImages: featuredImages,
			...data
		}
	}
}

export default Homepage;