'use client'

export default function Head({ data, onThClick }: { data: any; onThClick: (key: string) => void }) {
	return (
		<thead>
			<tr>
				<th>
					<label htmlFor="checkbox-all">
						<input type="checkbox" id="checkbox-all" className="checkbox" />
					</label>
				</th>
				{Object.keys(data).map((key) => (
					<th key={key} onClick={() => onThClick(key)} className="cursor-pointer">
						{key}
					</th>
				))}
			</tr>
		</thead>
	)
}
