import { AiOutlinePlus } from 'react-icons/ai'
/*
아이콘은 react-icons에서 불러옴 아이콘별로 from이 달라지므로 확인하고 가져오기
아이콘을 넣을 때는 size를 같이 넣어주어야 한다.
*/
const AddTask = () => {
    return <div>
        <button className='btn btn-primary w-full'>Add new Task
        <AiOutlinePlus className='ml-1' size={18}/></button>
    </div>;
};

export default AddTask;