import React from "react";
import LinkItem from './LinkItem'
const LinkList = props => {

	const linkList = props.links.map(link => <LinkItem deleteItem={() => props.deleteItem(link.id)} link={link}/>)
	return (
		<ul className="links-list">
			<li className="links-list-item"><a href='http://google.com' target='_blank'>New Chrome Tab</a></li>
			{linkList}
		</ul>
	)
};

export default LinkList;
