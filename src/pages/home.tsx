import { Link } from "react-router-dom";
import image1 from "../assets/images/home/image1.png";
import image2 from "../assets/images/home/image2.png";
import image3 from "../assets/images/home/image3.png";
import image4 from "../assets/images/home/image4.avif";
import image5 from "../assets/images/home/image5.avif";
import image6 from "../assets/images/home/image6.avif";
import image7 from "../assets/images/home/image7.avif";
import image8 from "../assets/images/home/image8.avif";
import image9 from "../assets/images/home/image9.avif";
import image10 from "../assets/images/home/image10.avif";
import image11 from "../assets/images/home/image11.avif";
import image12 from "../assets/images/home/image12.avif";
import useWindowSize from "../hooks/windowSize";

export default function Home() {
	const { windowWidth } = useWindowSize();
	return (
		<>
			<div className='grid grid-cols-12 max-md:grid-rows-19 md:grid-rows-10 pb-[8.33333vw] 2xl:pb-[133.33333px]'>
				<div className='row-start-1 row-end-8 col-start-1 col-end-13 md:col-end-8'>
					<article className='md:h-[38.83333vw] max-md:h-[70.66667vw] relative max-h-[620px] bg-cover bg-[url("src/assets/images/home/Public-beta.avif")]'>
						<Link className='absolute p-[4.16667vw] w-full h-full' to='#'>
							<h1 className='text-[2.5rem] leading-9 text-[#FDF900] font-medium'>
								Live 12.1 is now in public beta
							</h1>
							<div className='mt-4'>
								<p className='text-2xl leading-6 font-medium text-[#FDF900] flex gap-1'>
									<span className='underline'>See what’s new</span>
									<span>›</span>
								</p>
							</div>
						</Link>
					</article>
				</div>
				<div className='row-start-9 row-end-[16] md:row-start-4 md:row-end-8 col-start-2 md:col-start-9 col-end-13'>
					<article className='md:h-[22.5vw] md:max-h-[320px] max-md:h-[60.66667vw] relative bg-cover bg-[url("src/assets/images/home/Focus-and-feel.avif")]'>
						<Link className='absolute p-[2.08333vw] w-full h-full' to='#'>
							<h1 className='text-xl leading-6 text-[#00ffff] font-medium'>
								Focus and feel
							</h1>
							<div className='mt-2'>
								<p className='leading-6 font-medium text-[#00ffff] flex gap-1'>
									<span className='underline'>Meet the new Push</span>
									<span>›</span>
								</p>
							</div>
						</Link>
					</article>
				</div>
				<div className='row-start-[14] md:row-start-7 row-end-[20] md:row-end-11 col-start-1 md:col-start-6 col-end-12 md:col-end-10'>
					<article className='md:h-[22.5vw] md:max-h-[320px] relative max-md:h-[60.66667vw] bg-cover bg-[url("src/assets/images/home/new-in-note.avif")]'>
						<Link className='absolute p-[2.08333vw] w-full h-full' to='#'>
							<h1 className='text-xl leading-6 text-[#00FFAF] font-medium'>
								See what’s new in Note
							</h1>
							<div className='mt-2'>
								<p className='leading-6 font-medium text-[#00FFAF] flex gap-1'>
									<span className='underline'>
										Check out the latest features
									</span>
									<span>›</span>
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
					<div className='md:text-xl justify-center flex gap-1 font-medium text-blue md:absolute md:top-[.35em] md:right-[8.33333vw]'>
						<span>See all posts</span>
						<span>›</span>
					</div>
				</Link>
			</section>
			<section className='relative px-[8.33333vw] pb-[2.08333vw] 2xl:px-[133.33333px] 2xl:pb-[33.33333px]'>
				<h2 className='text-3xl font-medium mb-[1em]'>
					Learn more about Live 12
				</h2>
				<div className='grid max-[575px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-x-[4.16666vw]'>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image4} />
						</div>

						<h2 className='font-medium'>
							Get Tips and Tricks from Our Favorite Creators ›
						</h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image5} />
						</div>

						<h2 className='font-medium'>
							Discover Meld: Live 12’s New Bi-Timbral Synth ›
						</h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image6} />
						</div>

						<h2 className='font-medium'>Watch the Learn Live 12 Videos ›</h2>
					</div>
				</div>
			</section>
			<section className='relative px-[8.33333vw] pb-[2.08333vw] 2xl:px-[133.33333px] 2xl:pb-[33.33333px]'>
				<h2 className='text-3xl font-medium mb-[1em]'>
					Expand Live 12 with Packs
				</h2>
				<div className='grid max-[575px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-x-[4.16666vw]'>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image7} />
						</div>

						<h2 className='font-medium'>Granulator III › </h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image8} />
						</div>

						<h2 className='font-medium'>Trap Drums by Sound Oracle › </h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image9} />
						</div>

						<h2 className='font-medium'>Lost & Found ›</h2>
					</div>
				</div>
			</section>
			<section className='relative px-[8.33333vw] pb-[2.08333vw] 2xl:px-[133.33333px] 2xl:pb-[33.33333px]'>
				<h2 className='text-3xl font-medium mb-[1em]'>
					Develop your music-making
				</h2>
				<div className='grid max-[575px]:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-x-[4.16666vw]'>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image10} />
						</div>

						<h2 className='font-medium'>Learn the foundations of music ›</h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image11} />
						</div>

						<h2 className='font-medium'>Get started with Live ›</h2>
					</div>
					<div className='mb-[4.16667vw]'>
						<div className='mb-[0.8em]'>
							<img className='w-full' src={image12} />
						</div>

						<h2 className='font-medium'>Experiment with tuning ›</h2>
					</div>
				</div>
			</section>
			<section className='relative px-[8.33333vw] py-[4.16667vw] 2xl:px-[133.33333px] 2xl:py-[66.66667px] bg-neutral'>
				<div className='flex md:text-xl font-light gap-[0.75em] justify-center'>
					<ul className='flex justify-center flex-wrap whitespace-nowrap text-blue font-medium gap-x-[0.75em]'>
						<li>
							<Link className='text-black' to='#'>
								More:
							</Link>
						</li>
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
						<li>
							<Link to='#'>One Thing</Link>
						</li>
					</ul>
				</div>
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
