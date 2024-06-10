import React from 'react';
import { myPageList } from '../components/Axios';
import Image from './Image';

const MyPageDetail = () => {
    // Login 상태가 아니면 main page로 navigate
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLogin) navigate("/");
        myPageList();
    },[])
    const [generatedImages, setGeneratedImages] = useState(null);

    return (
        <div className='container'>
            <div className='flex flex-col'>
                {generatedImages.map(item =>
                        <Image item={item} />
                )}
            </div>
        </div>
    );
};

export default MyPageDetail;