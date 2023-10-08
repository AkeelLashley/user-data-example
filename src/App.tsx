import { useState, useEffect } from 'react';

import './App.css';
import loadUsers, { UsersApiResponse } from './api/users';
import { User } from './types/user.types';
import Profiles from './components/Profiles';
import PagingButton from './components/PagingButton';

const App = () => {
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    loadUsers(currentPage).then((result: UsersApiResponse) => {
      setTotalPages(result.total_pages);
      setCurrentPage(result.page);
      setUsers(result.data);
      setIsLoading(false);
    });
  }, [currentPage]);

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="App">
      <PagingButton
        current={currentPage}
        total={totalPages}
        onPageChange={handlePageChange}
      />

      <main className="profile-cards">
        {isLoading ? <div>Loading...</div> : <Profiles users={users} />}
      </main>
    </div>
  );
};

export default App;
