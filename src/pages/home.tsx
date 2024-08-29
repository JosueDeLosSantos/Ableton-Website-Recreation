import { Link } from "react-router-dom";
import ArrowRight from "../assets/ArrowRight";
import image1 from "../assets/images/home/image1.png";
import image2 from "../assets/images/home/image2.png";
import image3 from "../assets/images/home/image3.png";
import useWindowSize from "../hooks/windowSize";

export default function Home() {
	const { windowWidth } = useWindowSize();
	return (
		<>
			<div className='grid grid-cols-12 grid-rows-10 pb-[8.33333vw] 2xl:pb-[133.33333px]'>
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
								Focus and feel
							</h1>
							<div className='mt-2'>
								<p className='leading-6 font-medium text-[#00ffff] flex'>
									<span className='underline'>Meet the new Push</span>
									<ArrowRight
										width='20'
										height='20'
										fillColor='#00ffff'
										viewBox='0 0 24 16'
									/>
								</p>
							</div>
						</Link>
					</article>
				</div>
				<div className='row-start-7 row-end-11 col-start-6 col-end-10'>
					<article className='h-[22.5vw] relative max-h-[320px] bg-cover bg-[url("src/assets/images/home/new-in-note.avif")]'>
						<Link className='absolute p-[2.08333vw] w-full h-full' to='#'>
							<h1 className='text-xl leading-6 text-[#00FFAF] font-medium'>
								See what’s new in Note
							</h1>
							<div className='mt-2'>
								<p className='leading-6 font-medium text-[#00FFAF] flex'>
									<span className='underline'>
										Check out the latest features
									</span>
									<ArrowRight
										width='20'
										height='20'
										fillColor='#00FFAF'
										viewBox='0 0 24 16'
									/>
								</p>
							</div>
						</Link>
					</article>
				</div>
			</div>
			<section className='relative px-[8.33333vw] pb-[2.08333vw] 2xl:px-[133.33333px] 2xl:pb-[33.33333px]'>
				<h2 className='text-3xl font-medium mb-[1em]'>The latest from Ableton</h2>
				<div className='grid max-[575px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-x-[4.16666vw]'>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image1} />
						</div>
						{/*  */}
						<CardTags title='Podcasts' />
						<h2 className='font-medium'>
							Zora Jones on Learning to Sing to Sample Herself
						</h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image2} />
						</div>
						{/*  */}
						<CardTags bgColor='bg-[#00D2BE]' title='Tutorials' />
						<h2 className='font-medium'>
							Drum Sampler: Exploring Live 12.1’s New Device with Ned Rush
						</h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image3} />
						</div>
						{/*  */}
						<CardTags bgColor='bg-[#B1C5FF]' title='Videos' />
						<h2 className='font-medium'>
							Watch Jamie Blake and Keana’s Push 3 Performance
						</h2>
					</div>
				</div>
				<div className='max-lg:hidden absolute top-[0.5em] right-[8.33333vw] 2xl:right-[133.33333px]'>
					<ul className='flex gap-[14px] text-blue text-xl font-medium'>
						<li>
							<Link to='#'>All posts</Link>
						</li>
						<li>
							<Link to='#'>Artists</Link>
						</li>
						<li>
							<Link to='#'>News</Link>
						</li>
						<li>
							<Link to='#'>Downloads</Link>
						</li>
						<li>
							<Link to='#'>Tutorials</Link>
						</li>
						<li>
							<Link to='#'>Videos</Link>
						</li>
						<li>
							<Link to='#'>Loop</Link>
						</li>
					</ul>
				</div>
				<Link className='lg:hidden' to='#'>
					<div className='md:text-xl justify-center flex font-medium text-blue md:absolute md:top-[.35em] md:right-[8.33333vw]'>
						<span>See all posts</span>
						<ArrowRight
							fillColor='#0000ff'
							width={`${(windowWidth > 767 && "20") || "16"}`}
							height={`${(windowWidth > 767 && "26") || "24"}`}
							viewBox={`0 0 24 ${(windowWidth > 767 && "16") || "20"}`}
						/>
					</div>
				</Link>
			</section>
		</>
	);
}

const CardTags = ({
	title,
	bgColor = "bg-transparent"
}: {
	title: string;
	bgColor?: string;
}) => {
	return (
		<h3 className='text-sm leading-6 mb-[0.2em]'>
			<Link className={`px-[0.85em] py-[0.14em] ${bgColor}`} to='#'>
				{title}
			</Link>
		</h3>
	);
};
