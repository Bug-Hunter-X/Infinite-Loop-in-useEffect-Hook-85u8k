```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 5) {
        setCount(0);
      } else {
        setCount(count + 1);
      }
    }, 1000); // Simulate an asynchronous update

    return () => clearTimeout(timer); // Cleanup function
  }, [count]);

  return <div>Count: {count}</div>;
}
```