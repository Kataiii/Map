import styles from './styles/Button.module.css';


interface PrimaryButtonProps{
    content: string;
    onClick: () => void;
}

const PrimaryButtom: React.FC<PrimaryButtonProps> = ({content, onClick}) => {
    return(
        <button className={styles.primary_button} onClick={onClick}>{content}</button>
    )
}

export default PrimaryButtom;