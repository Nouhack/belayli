import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import aios from "axios";
import ClassComponents from "./teacher/ClassComp";
import {
  Container,
  Checkbox,
  Box,
  Divider,
  Fade,
  Select,
  ScaleFade,
  Slide,
  SlideFade,
  Stack,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  HStack,
  Avatar,
  Center,
  IconButton,
  Lorem,
  VStack,
  Input,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Radio,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";

export default function Wp() {
  const [iccData, seticcData] = useState([]);
  const [classIcc, setclassIcc] = useState([]);
  useEffect(() => {
    axios.get("/api/getallsem").then((res) => {
      seticcData((prev) => [...prev, res.data]);
      console.log("khlass");
    });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [iccGroups, seticcGroups] = useState([]);

  const [selectedSpec, setselectedSpec] = useState("");
  const [selectedsem, setselectedsem] = useState("");
  const [selectedgroups, setselectedgroups] = useState([]);
  const [groupsdefault, setgroupsdefault] = useState(true);

  const [placement, setPlacement] = React.useState("right");

  const [name, setname] = useState(null);
  const [username, setusername] = useState(null);
  const [matricule, setmatricule] = useState(null);
  const [password, setpassword] = useState(null);
  const [email, setemail] = useState(null);
  const [phone, setphone] = useState(null);
  const [selectedspec, setselectedspec] = useState([]);
  const [selectedseme, setselectedseme] = useState([]);

  const [specialtyList, setspecialtyList] = useState([
    "Physics",
    "math",
    "Algorithme",
    "English",
    "Algebra",
  ]);
  const [spec, setspec] = useState(["Spec 1", "Spec 2", "Spec 3", "Spec 4"]);
  const [groups, setgroups] = useState(["G 1", "G 2", "G 3", "G 4", "G 5"]);
  const [seme, setsem] = useState([
    "S 1",
    "S 2",
    "S 3",
    "S 4",
    "S 5",
    "S 6",
    "M 1",
    "M 2",
  ]);
  const [columns, setcolumns] = useState([
    { title: "Name ", field: "name" },
    { title: "Username ", field: "username" },
    { title: "Matricule ", field: "matricule" },
    { title: "Password", field: "password" },
    {
      title: "Spécialité",
      field: "Spécialité",
    },
    { title: "Semester", field: "semester" },
    { title: "Group", field: "group" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "Phone" },
  ]);

  const [data, setdata] = useState([
    {
      name: "nazar",
      username: "massi",
      matricule: "HJH34",
      password: "sdlkfjslfdkj",
      Spécialité: ["Spec 1", "Spec 2", "Spec 3"].toString(),
      semester: ["L 2", "L 3"].toString(),
      group: ["G2", "G4"].toString(),
      email: "nouh@gmail.com",
      Phone: "4935345",
    },
  ]);
  const [showSemester, setshowSemester] = useState(false);
  return (
    <Flex
      w="85%"
      h="100vh"
      p="20px"
      direction="column"
      borderTopRightRadius={50}
      borderBottomRightRadius={50}
    >
      {selectedspec.toString()}
      {selectedseme.toString()}
      {selectedgroups.toString()}
      <MaterialTable
        style={{
          maxHeight: "100%",
          border: "none",
          boxShadow: "none",
        }}
        columns={columns}
        data={data}
        title="Teachers List"
        actions={[
          {
            icon: "add",
            tooltip: "Add User",
            isFreeAction: true,
            onClick: onOpen,
          },
        ]}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setdata([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setdata([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
      <>
        <Drawer
          placement={placement}
          onClose={onClose}
          isOpen={isOpen}
          size="sm"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Add Teacher</DrawerHeader>
            <DrawerBody>
              <Input
                variant="flshed"
                placeholder="small size"
                mt={4}
                size="sm"
                placeholder="Name"
                onChange={(e) => setname(e.target.value)}
              />
              <Divider orientation="horizontal" mt={3} />
              <Input
                placeholder="small size"
                variant="flshed"
                mt={4}
                size="sm"
                placeholder="Username"
                onChange={(e) => setusername(e.target.value)}
              />
              <Divider orientation="horizontal" mt={3} />
              <Input
                placeholder="small size"
                mt={4}
                size="sm"
                placeholder="Matricule"
                variant="flshed"
                onChange={(e) => setmatricule(e.target.value)}
              />
              <Divider orientation="horizontal" mt={3} />
              <Input
                variant="flshed"
                placeholder="small size"
                mt={4}
                size="sm"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
              <Divider orientation="horizontal" mt={3} />
              <Input
                placeholder="small size"
                mt={4}
                size="sm"
                placeholder="Email"
                variant="flshed"
                onChange={(e) => setemail(e.target.value)}
              />
              <Divider orientation="horizontal" mt={3} />
              <Input
                placeholder="small size"
                mt={4}
                size="sm"
                placeholder="Phone"
                variant="flshed"
                onChange={(e) => setphone(e.target.value)}
              />
              <Divider orientation="horizontal" mt={3} />
              <Text mt={5} fontSize="lg" fontWeight="bold">
                ICC
              </Text>
              <Select placeholder="select ICC" size="md">
                {iccData.length > 0 &&
                  iccData[0].sp.map((item, index) => {
                    return item.semesters.map((item2, index2) => {
                      return (
                        <option
                          key={index2}
                          value={(item, item2)}
                          onClick={(e) => {
                            seticcGroups(item.groups);
                            setselectedSpec(item.specialty);
                            setselectedsem(e.target.value);
                            setselectedgroups([]);
                            console.log(
                              item.specialty,
                              e.target.value,
                              item.groups
                            );
                          }}
                        >
                          {item.specialty} {item2}
                        </option>
                      );
                    });
                  })}
              </Select>

              <Text mt={5} fontSize="lg" fontWeight="bold">
                Groupes
              </Text>
              <Flex flexWrap="wrap" mt={3} justify="space-around">
                {iccGroups.map((item, index) => {
                  return (
                    <Checkbox
                      colorScheme="green"
                      key={item}
                      //defaultIsChecked
                      isChecked={selectedgroups.includes(item) ? true : false}
                      onChange={(e) => {
                        if (e.target.checked) {
                          // add to the array
                          setselectedgroups((rev) => [...rev, item]);
                          console.log(selectedgroups);
                        } else {
                          // remove from the array
                          setselectedgroups((rev) => {
                            var newarr = rev.splice(rev.indexOf(item), 1);

                            return [newarr];
                          });

                          console.log(
                            "-------------------  selectedgroup  -----------------------"
                          );
                          console.log(selectedgroups);
                          console.log(
                            "-------------------  classicc-----------------------"
                          );
                          console.log(classIcc);
                        }
                      }}
                    >
                      {item}
                    </Checkbox>
                  );
                })}
              </Flex>
              <Button
                onClick={() => {
                  setclassIcc((prev) => [
                    ...prev,
                    {
                      specialty: selectedSpec,
                      semester: selectedsem,
                      groups: [...selectedgroups],
                    },
                  ]),
                    setselectedgroups([]);
                }}
              >
                add
              </Button>
              <Flex flexWrap="wrap" justify="center" align="center" bg="blue">
                {classIcc.map((item, index) => {
                  return <ClassComponents item={item} key={index} />;
                })}
              </Flex>
              <Flex alignItems="center" justify="center" mt={9} mb={5}>
                <ButtonGroup variant="outline" spacing="6">
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      console.log(iccData[0].sp),
                        setdata((prev) => [
                          ...prev,
                          {
                            name: name,
                            username: username,
                            matricule: matricule,
                            password: password,
                            Spécialité: selectedspec.toString(),
                            semester: selectedseme.toString(),
                            group: selectedgroups.toString(),
                            email: email,
                            Phone: phone,
                          },
                        ]);
                    }}
                  >
                    Save
                  </Button>
                  <Button>Cancel</Button>
                </ButtonGroup>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    </Flex>
  );
}

/*

{
  name : 'nouh',
  username : 'saiche',
  class : [
    {
      specialty : 'esil',
      semester : 's1',
      groups : [g1,g2,g3]
    },

    {
      specialty : 'esil',
      semester : 's2',
      groups : [g1]
    }
  ]
}



===========================================-==--0-==

[
  { name : "s1", specialty : "esil" , groups : ["g1","g2","g3"]},

  { name : "s2", specialty : "esil" , groups : ["g1","g2","g3"]}
]
*/
