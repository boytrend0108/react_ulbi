import cl from './MyModal.module.scss';

type Props = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (v: boolean) => void;
}

export const MyModal: React.FC<Props> = ({ children, visible, setVisible }) => {
  const rootClass = [cl.myModal];

  if (visible) {
    rootClass.push(cl.myModal__active);
  }

  return (
    <div 
      className={rootClass.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div 
        className={cl.myModal__content}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
