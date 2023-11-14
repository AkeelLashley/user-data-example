import { useState, useEffect } from 'react';
import './App.css';
import loadUsers, { UsersApiResponse } from './api/users';
import { User } from './types/user.types';
import Profiles from './components/Profiles';
import PagingButton from './components/PagingButton';
import Loading from './components/Loading';

const App = () => {
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

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
      {/* Show PagingButton only if not loading and totalPages is more than 1 */}
      {!isLoading && totalPages > 1 && (
        <PagingButton
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
        />
      )}

      <main className="profile-cards">
        {isLoading ? <Loading /> : <Profiles users={users} />}
      </main>
    </div>
  );
};

export default App;
