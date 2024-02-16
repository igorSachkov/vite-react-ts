import {restPostService} from '@services/rest-service.ts';
import {IPost} from '@models/dummy-rest-model.ts';
import {useDispatch, useSelector} from 'react-redux';
import {IBlogSelector, setValue} from '@redux/slices/blogSlice.ts';
import {useEffect} from 'react';


export const Blog = () => {
  const posts: IPost[] = useSelector((state: IBlogSelector) => state.posts.value);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!posts?.length) {
      restPostService.getAll(12)
        .then((answer) => {
          console.warn(answer);
          dispatch(setValue(answer.posts));
        })
        .catch(((err: string) => {
          console.warn(err, 'err');
        }));
    }
  }, []);
  return (
    <>articles</>
  );
};
