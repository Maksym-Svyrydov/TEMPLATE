import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchUsers, getTotalUsers } from '../API/AxiosAPI';
import { LoadMore } from '../components/LoadMore/LoadMore.styled';
import UsersList from '../components/UsersList/UsersList';
import { FilterStarus } from '../components/FilterStaus/FilterStatus';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(3);
  const [totalUser, setTotalUser] = useState();
  const [filter, setFilter] = useState('');
  const location = useLocation();

  const onloadMore = () => {
    setPage(page + 3);
  };
  useEffect(() => {
    fetchUsers(page, filter).then((result) => {
      setUsers(result);
      setFilter(filter);
    });
  }, [page, filter]);
  useEffect(() => {
    getTotalUsers(filter).then((result) => {
      setTotalUser(result.length);
    });
  });
  const handleFilter = (filter) => {
    setFilter(filter);
    setPage(3);
  };
  return (
    <div
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
      state={{ from: location }}
    >
      <FilterStarus handleFilter={handleFilter} />
      <UsersList users={users}></UsersList>
      {page < totalUser && (
        <LoadMore onClick={onloadMore}>Load More...</LoadMore>
      )}
    </div>
  );
};

export default Tweets;
