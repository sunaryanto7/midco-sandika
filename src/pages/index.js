import Homepage from '@app/homepage';

const mainBannerImages = [
	{ 
		mobile:"https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner-02.jpg",
		desktop: "https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner_comp_.jpg",
		alt: "Surprise Deals December"
	},
	{ 
		mobile:"https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner-02.jpg",
		desktop: "https://exsport.co.id/media/weltpixel/owlcarouselslider/images/1/_/1._exsport-main_banner_comp_.jpg",
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
			...data
		}
	}
}

export default Homepage;