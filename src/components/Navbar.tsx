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
		<header className='pt-5 max-xl:pr-[17px] relative '>
			<nav aria-label='primary'>
				<Link
					className='z-30 absolute top-5 left-0 mb-5 max-xl:ml-5 xl:ml-10 mr-8'
					title='Go to homepage'
					to='/'
				>
					{/* Ableton Logo */}
					<Logo />
				</Link>
				<div aria-hidden='false'>
					<ul className='flex xl:pl-[140px] max-xl:pl-[100px] max-xl:pr-5 xl:pr-10 font-medium mb-5'>
						<li className='pr-[10px] xl:mr-[5px] xl:text-xl'>
							<Link to='#'>Live</Link>
						</li>
						<li className='px-[10px] xl:text-xl xl:mx-[5px]'>
							<Link to='#'>Push</Link>
						</li>
						<li className='px-[10px] xl:text-xl xl:mx-[5px]'>
							<Link to='#'>Note</Link>
						</li>
						<li className='px-[10px] xl:text-xl xl:mx-[5px]'>
							<Link to='#'>Link</Link>
						</li>
						<li className='px-[10px] xl:text-xl xl:mx-[5px]'>
							<Link to='#'>Shop</Link>
						</li>
						<li className='px-[10px] xl:text-xl xl:mx-[5px]'>
							<Link to='#'>Packs</Link>
						</li>
						<li className='px-[10px] xl:text-xl xl:mx-[5px]'>
							<Link to='#'>Help</Link>
						</li>
						<li
							onClick={handleMore}
							className='px-[10px] xl:text-xl xl:mx-[5px]'
						>
							<Link to='#'>
								<button className='flex'>
									<span>More</span>
									{showMore ? <MinusSign /> : <PlusSign />}
								</button>
							</Link>
						</li>
						<li className='pl-[10px] xl:pr-[10px] ml-auto xl:text-xl max-xl:text-sm text-blue'>
							<Link to='#'>Try Live 12 for free</Link>
						</li>
						<li className='pl-[10px] xl:ml-[10px] max-xl:ml-[5px] max-xl:text-sm leading-7 xl:relative xl:top-[1px]'>
							<Link to='#'>Log in or register</Link>
						</li>
					</ul>
					{showMore && (
						<div className='xl:pt-[27px] max-xl:pt-[10px] xl:px-[40px] max-xl:px-[20px] xl:pb-[55px] max-xl:pb-[30px]'>
							<section className='leading-6'>
								<h3 className='xl:pb-[9px] max-xl:pb-0.5 font-bold text-2xl'>
									More on Ableton.com:
								</h3>
								<ul className='font-normal flex'>
									<li className='pr-[10px]'>
										<Link to='#'>Blog</Link>
									</li>
									<li className='px-[10px]'>
										<Link to='#'>Ableton for the Classroom</Link>
									</li>
									<li className='px-[10px]'>
										<Link to='#'>
											Ableton for Colleges and Universities
										</Link>
									</li>
									<li className='px-[10px]'>
										<Link to='#'>Certified Training</Link>
									</li>
									<li className='px-[10px]'>
										<Link to='#'>About Ableton</Link>
									</li>
									<li className='px-[10px]'>
										<Link to='#'>Jobs</Link>
									</li>
									<li className='pl-[10px]'>
										<Link to='#'>Apprenticeships</Link>
									</li>
								</ul>
							</section>
							<section className='xl:pt-[42px] max-xl:pt-[25px]'>
								<h3 className='xl:pb-[9px] max-xl:pb-0.5 font-bold text-2xl'>
									More from Ableton:
								</h3>
								<ul className='mx-[-20px] flex'>
									<li className='px-5'>
										<Link to='#'>
											<div>
												<h4 className='font-bold'>Loop</h4>
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
												<h4 className='font-bold'>
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
												<h4 className='font-bold'>
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
												<h4 className='font-bold'>
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
