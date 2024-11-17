import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentFrom/StockCommentForm';
import { CommentGetAPI, CommentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';
import { CommentGet } from '../../Models/Comment';
import Spinner from '../Spinner/Spinner';
import StockCommentList from '../StockCommentList/StockCommentList';

type Props = {
    stockSymbol: string;
}

type CommentFormInputs = {
    title: string;
    content: string;
}

const StockComment = ({stockSymbol}: Props) => {
    const [comments, setComment] = useState<CommentGet[] | null>(null);
    const[loading, setLoading] = useState<boolean>();

    useEffect(() => {
        getComments();
    },[])
    const handleComment = (e: CommentFormInputs) => {
        CommentPostAPI(e.title, e.content, stockSymbol)
        .then((res) => {
            if(res) {
                toast.success("Comment created successfuly!");
                getComments();
            }
        }).catch((e) => {
            toast.warning(e);
        })
    }
    const getComments = () => {
        setLoading(true);
        CommentGetAPI(stockSymbol)
        .then((res) => {
            setLoading(false);
            setComment(res?.data!);
        })
    }
  return (
    <div className='flex flex-col'>
        {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
        <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  )
}

export default StockComment