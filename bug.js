```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here
    if (count > 5) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```