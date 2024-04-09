import Image from "next/image";
import Button from "./Button";

const Hero = () => {
	return (
		<section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
			<div className="hero-map" />

			<div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
				<Image
					src="/pliers.svg"
					alt="camp"
					width={50}
					height={50}
					className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
				/>
				<h1 className="bold-52 lg:bold-88">ArtsElec</h1>
				<p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
					Serving electrical installations and performing Douglas
					controls work are key. This involves routine maintenance,
					troubleshooting, and system upgrades to meet safety
					standards and enhance operational efficiency. We focus on
					keeping electrical and lighting systems reliable and
					energy-efficient, requiring strong technical knowledge and a
					commitment to safety and quality.
				</p>

				<div className="my-11 flex flex-wrap gap-5">
					<div className="flex items-center gap-2">
						{Array(5)
							.fill(1)
							.map((_, index) => (
								<Image
									src="/star.svg"
									key={index}
									alt="star"
									width={24}
									height={24}
								/>
							))}
					</div>

					<p className="bold-16 lg:bold-20 text-blue-70">
						100's
						<span className="regular-16 lg:regular-20 ml-1">
							of satisfied customers
						</span>
					</p>
				</div>

				<div className="flex flex-col w-full gap-3 sm:flex-row">
					<Button
						type="button"
						title="Testimonials"
						variant="btn_blue"
					/>
					<Button
						type="button"
						title="How we work?"
						variant="btn_white_text"
					/>
				</div>
			</div>

			<div className="relative flex flex-1 items-start">
				<div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
					<div className="flex flex-col">
						<div className="flexBetween">
							<p className="regular-16 text-gray-20">Location</p>
						</div>
						<p className="bold-20 text-white">Lower Mainland</p>
					</div>

					<div className="flexBetween">
						<div className="flex flex-col">
							<p className="regular-16 block text-gray-20">
								Available
							</p>
							<p className="bold-20 text-white">Mon - Sat</p>
						</div>
						<div className="flex flex-col">
							<p className="regular-16 block text-gray-20">
								Hours
							</p>
							<p className="bold-20 text-white">7AM-4PM</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
