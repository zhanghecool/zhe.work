import { Link } from 'remix';

export default function Index() {
  return (
    <div className='text-3xl font-bold underline'>
      <h1>你好，欢迎来到 ZHE.WORK</h1>
      <Link to='/posts'>Posts</Link>
    </div>
  );
}
