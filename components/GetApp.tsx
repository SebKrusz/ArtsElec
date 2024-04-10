import React from "react";
import Button from "./Button";

const GetApp = () => {
	return (
		<section className="flexcenter w-full flex-col pb-[100px]">
			<div className="get-app">
				<div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
					<h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
						Contact ArtsElec
					</h2>
					<p className="regular-16 text-gray-10">
						Free quote available for all your electrical needs.
					</p>
					<div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
						<Button
							type="button"
							title="Call"
							icon="/phone.svg"
							variant="btn_white"
							full
						/>
						<Button
							type="button"
							title="Email"
							icon="/email-green.png"
							variant="btn_dark_green_outline"
							full
						/>
					</div>
					<div className="flex flex-1 items-center justify-end">
						{/* <Image
							src="/phones.png"
							alt="phones"
							width={550}
							height={870}
						/> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetApp;
