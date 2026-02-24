// TargetEntryPage.jsx - Single purpose: Target Entry page
import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
//import { getTargetOfficers } from '../../api/tracking.api';
//import useAuthStore from '../../store/authStore';

export default function TargetEntryPage() {
  const { user } = useAuthStore();
  const [factoryCode, setFactoryCode] = useState(user?.defaultFactory || '');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['targetentrypage', factoryCode, fromDate, toDate],
    queryFn: () => getTargetOfficers({ factoryCode, fromDate, toDate }).then(r => r.data.data),
    enabled: !!fromDate && !!toDate,
  });
  return (
    <div>
      <h1 className='page-title'>Target Entry</h1>
      <div className='filter-bar'>
        <div className='form-group' style={{ flex: '0 0 160px' }}>
          <label className='form-label'>Factory</label>
          <input value={factoryCode} onChange={e => setFactoryCode(e.target.value)} placeholder='All' />
        </div>
        <div className='form-group' style={{ flex: '0 0 160px' }}>
          <label className='form-label'>From Date</label>
          <input type='date' value={fromDate} onChange={e => setFromDate(e.target.value)} />
        </div>
        <div className='form-group' style={{ flex: '0 0 160px' }}>
          <label className='form-label'>To Date</label>
          <input type='date' value={toDate} onChange={e => setToDate(e.target.value)} />
        </div>
      </div>
      <div className='card'>
        {isLoading && <div className='loading-text'><div className='spinner' /></div>}
        {error && <div className='loading-text' style={{ color: 'var(--accent-red)' }}>Error loading data</div>}
        {!data && !isLoading && <div className='loading-text'>Set filters and search</div>}
        {data && data.length === 0 && <div className='loading-text'>No records found</div>}
        {data && data.length > 0 && (
          <div className='table-wrap'>
            <table>
              <thead><tr>{Object.keys(data[0]).map(c => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>{data.map((row, i) => (
                <tr key={i}>{Object.values(row).map((v, j) => <td key={j}>{v != null ? String(v) : '-'}</td>)}</tr>
              ))}</tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
