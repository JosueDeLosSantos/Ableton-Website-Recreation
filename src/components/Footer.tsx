import { Link } from "react-router-dom";
import ArrowRight from "../assets/ArrowRight";
import FacebookIcon from "../assets/FacebookIcon";
import TwitterXIcon from "../assets/TwitterXIcon";
import YouTubeIcon from "../assets/YouTubeIcon";

export default function Footer() {
	return (
		<footer>
			<div className='px-[8.33333vw]'>
				<div className='pb-[4.16667vw]'>
					<img
						className='max-lg:w-[122px] lg:w-[188px]'
						src='https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/ableton-wordmark.c025e3df71b3.svg'
						alt='Ableton'
					/>
				</div>
				<div className='flex max-lg:flex-col lg:flex-row-reverse'>
					<div className='w-[40%]'>
						<label>
							<span className='block font-medium'>
								Sign up to our newsletter
							</span>
							<span>
								Enter your email address to stay up to date with the
								latest offers, tutorials, downloads, surveys and more.
							</span>
						</label>
						<div className='w-full'>
							<form className='max-xl:mt-4 xl:mt-5'>
								<div className='flex'>
									<div className='flex-auto'>
										<input
											className='py-[0.4em] px-[0.75em] bg-neutral w-full'
											id='sign-up-to-newsletter'
											name='email'
											type='email'
											placeholder='Email Address'
										/>
									</div>
									<input
										className='py-[0.35em] px-[1.5em] text-white font-medium cursor-pointer bg-blue'
										type='submit'
										value='Sign up'
									/>
								</div>
							</form>
						</div>
					</div>
					<div className='w-[30%] lg:order-1'>
						<ul>
							<li className='flex'>
								<Link to='#'>Register Live or Push</Link>
								<span>
									<ArrowRight />
								</span>
							</li>
							<li className='flex'>
								<Link to='#'>About Ableton</Link>
								<span>
									<ArrowRight />
								</span>
							</li>
							<li className='flex'>
								<Link to='#'>Jobs</Link>
								<span>
									<ArrowRight />
								</span>
							</li>
						</ul>
						<ul className='flex'>
							<li>
								<Link to='#'>
									<FacebookIcon />
								</Link>
							</li>
							<li>
								<Link to='#'>
									<TwitterXIcon />
								</Link>
							</li>
							<li>
								<Link to='#'>
									<YouTubeIcon />
								</Link>
							</li>
						</ul>
					</div>
					<div className='w-[30%]'></div>
				</div>
			</div>
		</footer>
	);
}
