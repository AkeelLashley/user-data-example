import './PagingButton.css';

type PagingButtonProps = {
  current: number;
  total: number;
  onPageChange: (newPage: number) => void;
};

const PagingButton = ({ current, total, onPageChange }: PagingButtonProps) => {
    
  const onClickHandler = () => {
    let newPage;

    if (current === total) {
      newPage = current - 1;
    } else {
      newPage = current + 1;
    }

    onPageChange(newPage);
  };

  const label = current === total ? 'Previous' : 'Next';

  return (
    <button className="paging-button" onClick={onClickHandler}>
      {label}
    </button>
  );
};

export default PagingButton;
