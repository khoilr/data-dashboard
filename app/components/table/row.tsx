export default function Row({ data }: { data: any }) {
	return (
		<tr className="hover">
			<td>
				<label>
					<input type="checkbox" className="checkbox" />
				</label>
			</td>
			{Object.entries(data).map(([key, value]) => (
				<td key={key}>{value as string}</td>
			))}
		</tr>
	)
}
