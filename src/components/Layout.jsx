import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

function Layout({
	children,
	inboxCount,
	archivedCount,
	activeTab,
	setActiveTab,
}) {
	return (
		<main className='min-h-screen bg-white flex items-center justify-center p-2 sm:p-4'>
			<div className='bg-[#E9E9E9] rounded-lg shadow-xl overflow-hidden max-h-[812px] h-[90vh] my-2 w-full max-w-[375px] flex flex-col'>
				<Header
					inboxCount={inboxCount}
					archivedCount={archivedCount}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				{children}
				<Footer inboxCount={inboxCount} />
			</div>
		</main>
	);
}
Layout.propTypes = {
	children: PropTypes.node.isRequired,
	inboxCount: PropTypes.number.isRequired,
	archivedCount: PropTypes.number.isRequired,
	activeTab: PropTypes.string.isRequired,
	setActiveTab: PropTypes.func.isRequired,
};

export default Layout;
