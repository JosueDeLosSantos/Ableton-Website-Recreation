import { Link } from "react-router-dom";
import ArrowRight from "../assets/ArrowRight";

export default function Home() {
	return (
		<>
			<div className='grid grid-cols-12 grid-rows-12'>
				<div className='row-start-1 row-end-8 col-start-1 col-end-8'>
					<article className='h-[38.83333vw] relative max-h-[620px] bg-cover bg-[url("src/assets/images/home/Public-beta.avif")]'>
						<Link className='absolute p-[4.16667vw] w-full h-full' to='#'>
							<h1 className='text-[2.5rem] leading-[1.2rem] text-[#FDF900] font-medium'>
								Live 12.1 is now in public beta
							</h1>
							<div className='mt-4'>
								<p className='text-2xl leading-6 font-medium text-[#FDF900] flex'>
									<span className='underline'>See what’s new</span>
									<ArrowRight
										width='20'
										height='20'
										fillColor='#FDF900'
									/>
								</p>
							</div>
						</Link>
					</article>
				</div>
				<div className='row-start-4 row-end-8 col-start-9 col-end-13'>
					<article className='h-[22.5vw] relative max-h-[320px] bg-cover bg-[url("src/assets/images/home/Focus-and-feel.avif")]'>
						<Link className='absolute p-[2.08333vw] w-full h-full' to='#'>
							<h1 className='text-xl leading-6 text-[#00ffff] font-medium'>
								See what’s new in Note
							</h1>
							<div className='mt-4'>
								<p className='leading-6 font-medium text-[#00ffff] flex'>
									<span className='underline'>
										Check out the latest features
									</span>
									<ArrowRight
										width='20'
										height='20'
										fillColor='#00ffff'
									/>
								</p>
							</div>
						</Link>
					</article>
				</div>
				<div className='row-start-7 row-end-12 col-start-6 col-end-10'>
					<article className='h-[22.5vw] relative max-h-[320px] bg-cover bg-[url("src/assets/images/home/new-in-note.avif")]'>
						<Link className='absolute p-[2.08333vw] w-full h-full' to='#'>
							<h1 className='text-xl leading-6 text-[#00FFAF] font-medium'>
								See what’s new in Note
							</h1>
							<div className='mt-4'>
								<p className='leading-6 font-medium text-[#00FFAF] flex'>
									<span className='underline'>
										Check out the latest features
									</span>
									<ArrowRight
										width='20'
										height='20'
										fillColor='#00FFAF'
									/>
								</p>
							</div>
						</Link>
					</article>
				</div>
			</div>
		</>
	);
}
