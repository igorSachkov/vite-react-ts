import style from './AddComment.module.scss';
import {useId, useState} from 'react';
import {LandingButton} from '@components/LandingButton/LandingButton.tsx';
import {restCommentsService} from '@services/rest-service.ts';
import {IPostComment} from '@models/dummy-rest-model.ts';
import {IAddComment} from '@models/blog-models.ts';


export const AddComment = ({addComment}: IAddComment) => {
  const [isLoad, setIsLoad] = useState(false);
  const [value, setValue] = useState('');
  const textAreaId = useId();

  function sendComment(): void {
    setIsLoad(true);
    const comment: IPostComment = {
      body: value,
      userId: 2,
      postId: 99
    };
    restCommentsService.addNewComment(comment)
      .then((answer => {
        setValue('');
        addComment(answer);
      }))
      .catch((err: string) => {
        console.warn('err', err);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }

  return (
    <div className={style.commentSection}>
      <label className={'poppins-600'} htmlFor={textAreaId}>Add <span className={'primary-text'}>comment</span></label>

      <textarea value={value} name="comment" id={textAreaId} cols={30} rows={10} placeholder={'ENTER YOUR COMMENT'}
                disabled={isLoad} onChange={e => setValue(e.target.value)}></textarea>

      <div className={style.buttonContainer}>
        <LandingButton onClick={sendComment} isPrimary={true} isDisabled={isLoad || !value.length}>Send</LandingButton>
      </div>

    </div>
  );
};
