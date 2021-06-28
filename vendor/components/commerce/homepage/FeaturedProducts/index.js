const FeaturedProducts = ({ images }) => {
	console.log(images)
	return (
		<div className={"featured-products"}>
			{images.map((image, i) => (
				<div key={i} className={i % 2 === 0 ? "odd" : "even"}>
					<div className={"featured-images"}>
						<picture>
							<source media="(min-width:650px)" srcSet={image.desktop} />
							<source media="(max-width:650px)" srcSet={image.mobile} />
							<img src={image.mobile} alt={image.alt} />
						</picture>
					</div>
					<div className={"featured-text"}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing elit duis,
							rutrum congue blandit placerat tempus leo mi, id elementum
							mollis suscipit nibh platea vulputate. Consequat odio condimentum
							nisl vel sed sem, semper vivamus urna tristique.
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default FeaturedProducts;