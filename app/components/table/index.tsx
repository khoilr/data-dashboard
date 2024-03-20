'use client'

import { useEffect, useState } from 'react'
import Head from './head'
import Row from './row'
import SortByPill from './sortByPill'

export default function Table() {
	const [sortBy, setSortBy] = useState<{ key: string; asc: boolean }[]>([])
	const [data, setData] = useState([
		{
			Index: 1,
			Name: 'Cy Ganderton',
			Job: 'Quality Control Specialist',
			FavoriteColor: 'Blue',
		},
		{
			Index: 2,
			Name: 'Hart Hagerty',
			Job: 'Desktop Support Technician',
			FavoriteColor: 'Purple',
		},
		{
			Index: 3,
			Name: 'Brice Swyre',
			Job: 'Tax Accountant',
			FavoriteColor: 'Red',
		},
		{
			Index: 4,
			Name: 'John Doe',
			Job: 'Software Engineer',
			FavoriteColor: 'Green',
		},
		{
			Index: 5,
			Name: 'Jane Smith',
			Job: 'Product Manager',
			FavoriteColor: 'Yellow',
		},
		{
			Index: 6,
			Name: 'Alex Johnson',
			Job: 'Data Analyst',
			FavoriteColor: 'Orange',
		},
	])

	const onThClick = (key: string) => {
		const index = sortBy.findIndex((item) => item.key === key)
		if (index === -1) {
			setSortBy([...sortBy, { key, asc: true }])
		} else {
			const updatedSortBy = [...sortBy]
			updatedSortBy[index].asc = !updatedSortBy[index].asc
			setSortBy(updatedSortBy)
		}
	}

	const onSortByPillClick = (key: string) => {
		const index = sortBy.findIndex((item) => item.key === key)
		if (index !== -1) {
			const updatedSortBy = [...sortBy]
			updatedSortBy.splice(index, 1)
			setSortBy(updatedSortBy)
		}
	}

	// Sort data after sortBy changes
	useEffect(() => {
		const sortedData = [...data]

		sortBy.forEach((sortItem) => {
			sortedData.sort((a, b) => {
				const aValue = a[sortItem.key as keyof typeof a]
				const bValue = b[sortItem.key as keyof typeof b]

				if (aValue > bValue) {
					return sortItem.asc ? 1 : -1
				}
				if (aValue < bValue) {
					return sortItem.asc ? -1 : 1
				}
				return 0
			})
		})

		setData(sortedData)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sortBy])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex gap-x-1">
				{sortBy.map((sortItem) => (
					<SortByPill key={sortItem.key} sortBy={sortItem.key} asc={sortItem.asc} />
				))}
			</div>
			<div className="overflow-x-auto">
				<table className="table table-lg table-zebra table-pin-rows table-pin-cols">
					<Head data={data[0]} onThClick={onThClick} />
					<tbody>
						{data.map((row) => (
							<Row data={row} key={row.Index} />
						))}
					</tbody>
				</table>
			</div>
		</main>
	)
}
