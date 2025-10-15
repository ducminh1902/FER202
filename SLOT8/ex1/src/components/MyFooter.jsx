import  Button  from "react-bootstrap/Button";

function MyFooter({author,email,linkGithud}) {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', textAlign: 'center', padding: '20px', marginTop: '40px' }}>
      <p>Author: {author}</p>
      <p>Created by: {email}</p>
      <p>&copy; {new Date().getFullYear()} MinhLD. All rights reserved</p>
      <Button variant="link" href="">
        My Link Github's project: {linkGithud}
      </Button>
    </footer>
  );
}

export default MyFooter;
