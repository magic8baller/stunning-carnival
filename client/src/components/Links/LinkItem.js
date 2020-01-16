import React from "react";

const LinkItem = ({deleteItem, link}) => {

	const httpsCheck = (link) => {
		if (!link.includes("http") || !link.includes("https")) {
			return `https://${link}`;
		}
		return link;
	};


	return (
		<li className="links-list-item" key={link.id}>
			<a href={httpsCheck(link.url)} target="_blank">
				<span>{link.name}</span>
			</a>
			<button
				className="list-item-delete-button"
				type="submit"
				onClick={() => deleteItem(link.id)}
			>
				x
      </button>
		</li>
	)
};

export default LinkItem;
