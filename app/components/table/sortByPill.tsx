import React from 'react'

export default function SortByPill({ sortBy, asc }: { sortBy: string; asc: boolean }) {
	return (
		<div className="join">
			<button
				type="button"
				className="btn btn-sm btn-outline btn-primary join-item hover:bg-secondary"
				onClick={() => console.log('click')}
			>
				{asc ? (
					<svg
						className="inline-block w-4 fill-primary mx-1"
						version="1.1"
						xmlns="http://www.w3.org/1999/xlink"
						viewBox="0 0 123.959 123.959"
						transform="rotate(90)"
					>
						<g id="SVGRepo_bgCarrier" stroke-width="0" />
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
						<g id="SVGRepo_iconCarrier">
							<g>
								<path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z" />{' '}
							</g>
						</g>
					</svg>
				) : (
					<svg
						className="inline-block w-4 fill-primary mx-1"
						version="1.1"
						xmlns="http://www.w3.org/1999/xlink"
						viewBox="0 0 123.959 123.959"
						transform="rotate(270)"
					>
						<g id="SVGRepo_bgCarrier" stroke-width="0" />
						<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
						<g id="SVGRepo_iconCarrier">
							<g>
								<path d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z" />{' '}
							</g>
						</g>
					</svg>
				)}
				{sortBy}
			</button>
			<button
				aria-label="Remove"
				type="button"
				className="btn btn-sm btn-square btn-outline join-item btn-primary hover:bg-secondary"
				onClick={() => console.log('click')}
			>
				<svg
					viewBox="0 0 24 24"
					className="inline-block w-4 fill-primary mx-1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0" />
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
					<g id="SVGRepo_iconCarrier">
						<path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" />
					</g>
				</svg>
			</button>
		</div>
	)
}
