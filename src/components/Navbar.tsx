import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";
import PlusSign from "../assets/PlusSign";
import MinusSign from "../assets/MinusSign";
export default function Navbar() {
	const [showMore, setShowMore] = useState(false);
	function handleMore() {
		setShowMore(!showMore);
	}
	return (
		<header className='pt-5 lg:max-2xl:pr-[15px] relative overflow-visible'>
			<nav aria-label='primary'>
				<Link
					className='z-30 absolute top-5 left-0 mb-5 max-xl:ml-5 xl:ml-10 mr-8'
					title='Go to homepage'
					to='/'
				>
					{/* Ableton Logo */}
					<Logo />
				</Link>
				<div
					className='max-lg:absolute max-lg:top-0 max-lg:px-[15px] max-lg:pt-[70px] lg:bg-white max-lg:bg-blue max-lg:text-white max-lg:tracking-wide'
					aria-hidden='false'
				>
					<ul className='flex max-lg:flex-col xl:pl-[140px] xl:text-xl max-lg:pl-0 max-xl:pl-[100px] max-xl:pr-5 xl:pr-10 lg:font-medium lg:mb-5 max-lg:text-xl'>
						<li className='pr-[10px] xl:mr-[5px] max-lg:mb-5'>
							<Link to='#'>Live</Link>
						</li>
						<li className='lg:px-[10px] lg:max-xl:mx-[5px] xl:mx-[10px] max-lg:mb-5'>
							<Link to='#'>Push</Link>
						</li>
						<li className='lg:px-[10px] lg:max-xl:mx-[5px] xl:mx-[10px] max-lg:mb-5'>
							<Link to='#'>Note</Link>
						</li>
						<li className='lg:px-[10px] lg:max-xl:mx-[5px] xl:mx-[10px] max-lg:mb-5'>
							<Link to='#'>Link</Link>
						</li>
						<li className='lg:px-[10px] lg:max-xl:mx-[5px] xl:mx-[10px] max-lg:mb-5'>
							<Link to='#'>Shop</Link>
						</li>
						<li className='lg:px-[10px] lg:max-xl:mx-[5px] xl:mx-[10px] max-lg:mb-5'>
							<Link to='#'>Packs</Link>
						</li>
						<li className='lg:px-[10px] lg:max-xl:mx-[5px] xl:mx-[10px] max-lg:mb-5'>
							<Link to='#'>Help</Link>
						</li>
						<li
							onClick={handleMore}
							className='px-[10px] max-xl:mx-[5px] xl:mx-[10px] max-lg:hidden'
						>
							<Link to='#'>
								<button className='flex'>
									<span>More</span>
									{showMore ? <MinusSign /> : <PlusSign />}
								</button>
							</Link>
						</li>
						<li className='lg:pl-[10px] max-lg:mb-5 xl:pr-[10px] lg:ml-auto lg:max-xl:text-sm lg:text-blue'>
							<Link to='#'>Try Live 12 for free</Link>
						</li>
						<li className='lg:pl-[10px] xl:ml-[10px] max-lg:mb-[14px] font-normal lg:max-xl:ml-[5px] max-xl:text-sm leading-7 xl:relative xl:top-[1px]'>
							<Link to='#'>Log in or register</Link>
						</li>
					</ul>
					{showMore && (
						<div className='xl:pt-[27px] lg:max-xl:pt-[10px] xl:px-[40px] lg:max-xl:px-[20px] xl:pb-[55px] lg:max-xl:pb-[30px]'>
							<section className='leading-6 max-lg:pt-[10px]'>
								<h3 className='xl:pb-[9px] max-lg:pb-[10px] lg:max-xl:pb-[2px] lg:font-medium max-lg:text-xl lg:max-xl:text-2xl xl:text-3xl'>
									More on Ableton.com:
								</h3>
								<ul className='flex max-lg:flex-col xl:text-xl max-lg:text-sm'>
									<li className='pr-[10px] xl:mr-[5px] 2xl:mr-[10px] max-lg:mb-[14px]'>
										<Link to='#'>Blog</Link>
									</li>
									<li className='lg:px-[10px] xl:mx-[5px] 2xl:mx-[10px] max-lg:mb-[14px]'>
										<Link to='#'>Ableton for the Classroom</Link>
									</li>
									<li className='lg:px-[10px] xl:mx-[5px] 2xl:mx-[10px] max-lg:mb-[14px]'>
										<Link to='#'>
											Ableton for Colleges and Universities
										</Link>
									</li>
									<li className='lg:px-[10px] xl:mx-[5px] 2xl:mx-[10px] max-lg:mb-[14px]'>
										<Link to='#'>Certified Training</Link>
									</li>
									<li className='lg:px-[10px] xl:mx-[5px] 2xl:mx-[10px] max-lg:mb-[14px]'>
										<Link to='#'>About Ableton</Link>
									</li>
									<li className='lg:px-[10px] xl:mx-[5px] 2xl:mx-[10px] max-lg:mb-[14px]'>
										<Link to='#'>Jobs</Link>
									</li>
									<li className='lg:pl-[10px] xl:ml-[5px] 2xl:ml-[10px] max-lg:mb-[14px]'>
										<Link to='#'>Apprenticeships</Link>
									</li>
								</ul>
							</section>
							<section className='xl:pt-[42px] max-xl:pt-[25px]'>
								<h3 className='xl:pb-[9px] max-xl:pb-[2px] font-medium max-xl:text-2xl xl:text-3xl'>
									More from Ableton:
								</h3>
								<ul className='mx-[-20px] grid grid-cols-4 xl:text-xl'>
									<li className='px-5'>
										<Link to='#'>
											<div>
												<h4 className='font-medium'>Loop</h4>
												<p>
													Watch Talks, Performances and Features
													from Ableton's Summit for Music Makers
												</p>
											</div>
										</Link>
									</li>
									<li className='px-5'>
										<Link to='#'>
											<div>
												<h4 className='font-medium'>
													Learning Music
												</h4>
												<p>
													Learn the fundamentals of music making
													right in your browser.
												</p>
											</div>
										</Link>
									</li>
									<li className='px-5'>
										<Link to='#'>
											<div>
												<h4 className='font-medium'>
													Learning Synths
												</h4>
												<p>
													Get started with synthesis using a
													web-based synth and accompanying
													lessons.
												</p>
											</div>
										</Link>
									</li>
									<li className='px-5'>
										<Link to='#'>
											<div>
												<h4 className='font-medium'>
													Making Music
												</h4>
												<p>
													Some tips from 74 Creative Strategies
													for Electronic Producers.
												</p>
											</div>
										</Link>
									</li>
								</ul>
							</section>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
}
