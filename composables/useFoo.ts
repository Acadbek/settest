export default function () {
  return useState('foo', () => {
    console.log('hello from foo');
  })
}
