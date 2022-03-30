import { Card, CardBody, CardFooter, CardHeader, Button } from "reactstrap";


const Controls = () => {
    return (
        <div className="container ml-md-5" style={{textAlign: "center" }}>
            <Card style={{
                marginTop: "30px",
                marginBottom: "30px",
                textAlign: "center"
            }}>
                <CardHeader style={{
                    backgroundColor: "#d70f64",
                    color: "#fff"
                }}>
                    <h4>Add Ingredients</h4>
                </CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter>
                    <h5>
                        Price: BDT
                    </h5>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Controls;