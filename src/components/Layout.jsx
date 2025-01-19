import Header from './Header';
import Footer from './Footer';

function Layout({
	children,
	inboxCount,
	archivedCount,
	activeTab,
	setActiveTab,
}) {
	return (
		<main className='min-h-[calc(var(--vh)*100)] bg-white flex items-center justify-center pb-10'>
			<div className='bg-[#E9E9E9] rounded-lg shadow-xl overflow-hidden max-h-[812px] h-[90vh] w-full max-w-[375px] flex flex-col'>
				<Header
					inboxCount={inboxCount}
					archivedCount={archivedCount}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<div className='flex-grow'>{children}</div>
				<Footer inboxCount={inboxCount} />
			</div>
		</main>
	);
}

export default Layout;
