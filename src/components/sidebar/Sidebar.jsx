import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className=' sidebar border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<h3>All users</h3>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;