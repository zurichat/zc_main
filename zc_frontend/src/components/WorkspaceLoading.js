import styles from '../styles/WorkspaceLoading.module.css'
import people from '../assets/loader-people.svg'
import flowerOne from '../assets/flower-1.svg'
import flowerTwo from '../assets/flower-2.svg'

const WorkspaceLoader = () => {
	return (
		<section className={styles.loader_section}>
			<div className={styles.loading}>
				<header className={styles.loader_header}>
					<svg
						width='52'
						height='55'
						viewBox='0 0 52 55'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							x='7.00024'
							width='21'
							height='21'
							rx='1.0991'
							fill='#00B87C'
						/>
						<rect
							y='24'
							width='21'
							height='21'
							rx='1.0991'
							fill='#FEA162'
						/>
						<rect
							x='31'
							y='10'
							width='21'
							height='21'
							rx='1.0991'
							fill='#1A61DB'
						/>
						<rect
							x='24'
							y='34'
							width='21'
							height='21'
							rx='1.0991'
							fill='#DC1AA3'
						/>
					</svg>
					<h2 className={styles.logo_text}>Zuri</h2>
				</header>

				<section className={styles.loader}>
					<div className={styles.loading_container}>
						<div className={styles.loading_circle}></div>
						<svg
							width='52'
							height='55'
							viewBox='0 0 52 55'
							fill='none'
							className={styles.logo}
							xmlns='http://www.w3.org/2000/svg'>
							<rect
								x='7.00024'
								width='21'
								height='21'
								rx='1.0991'
								fill='#00B87C'
							/>
							<rect
								y='24'
								width='21'
								height='21'
								rx='1.0991'
								fill='#FEA162'
							/>
							<rect
								x='31'
								y='10'
								width='21'
								height='21'
								rx='1.0991'
								fill='#1A61DB'
							/>
							<rect
								x='24'
								y='34'
								width='21'
								height='21'
								rx='1.0991'
								fill='#DC1AA3'
							/>
						</svg>
					</div>
					<h2>Launching Zuri Chat...</h2>
				</section>
			</div>

			<footer className={styles.footer}>
				<img src={flowerOne} alt='flower' />
				<img src={people} alt='people' className={styles.people} />
				<img src={flowerTwo} alt='flower' />
			</footer>
		</section>
	)
}

export default WorkspaceLoader
