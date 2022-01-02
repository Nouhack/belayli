import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import aios from "axios";
import ClassComponents from "./teacher/ClassComp";
import { AddIcon } from "@chakra-ui/icons";
import {
  Container,
  Checkbox,
  Box,
  Divider,
  Fade,
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
import { Select as Selectt } from "@chakra-ui/react";
import axios from "axios";

const animatedComponents = makeAnimated();

export default function Wp() {
  const [iccData, seticcData] = useState([]);
  const [classIcc, setclassIcc] = useState([]);
  const [teacherIsAdded, setteacherIsAdded] = useState(false);
  const [modules, setmodules] = useState([]);
  useEffect(() => {
    axios.get("/api/getallsem").then((res) => {
      seticcData((prev) => [...prev, res.data]);
      console.log("khlass");
      console.log(res.data);
    });
  }, []);

  const options = [
    { value: "francais", label: "francais" },
    { value: "englais", label: "englais" },
    { value: "math", label: "math" },
    { value: "algebra", label: "algebra" },
    { value: "algorithme", label: "algorithme" },
    { value: "sgbd", label: "sgbd" },
    { value: "structuremachide", label: "structure machine" },
    { value: "javaEE", label: "java EE" },
    { value: "statistique", label: "statistique" },
    { value: "probabilite", label: "probabilite" },
  ];
  useEffect(() => {
    axios.get("/api/teacher").then((res) => {
      setdata(
        res.data.map((item) => {
          return {
            ...item,
            Spécialité: [
              ...new Set(item.class.map((item) => item.specialty)),
            ].toString(),
            semester: [
              ...new Set(item.class.map((item) => item.semester)),
            ].toString(),
            group: [
              ...new Set(
                [].concat.apply(
                  [],
                  item.class.map((item) => item.groups)
                )
              ),
            ].toString(),
          };
        })
      );
      //setdata(res.data);
    });
  }, []);

  const pickDuplicatespecialty = (arr) => [
    ...new Set(
      [].concat.apply(
        [],

        arr.map((item) => item.specialty)
      )
    ),
  ];

  const pickDuplicatesemester = (arr) => [
    ...new Set(
      [].concat.apply(
        [],

        arr.map((item) => item.semester)
      )
    ),
  ];

  const pickDuplicateGroups = (arr) => [
    ...new Set(
      [].concat.apply(
        [],

        arr.map((item) => item.groups)
      )
    ),
  ];

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

  const [data, setdata] = useState([]);
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
        options={{
          headerStyle: {
            backgroundColor: "red",
            color: "#FFF",
            fontWeight: "bold",
          },
        }}
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
              <Flex>
                <Selectt placeholder="select ICC" size="md">
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
                </Selectt>

                <IconButton
                  aria-label="Search database"
                  icon={<AddIcon />}
                  onClick={() => {
                    setclassIcc((prev) => [
                      ...prev,
                      {
                        specialty: selectedSpec,
                        semester: selectedsem,
                        groups: [...selectedgroups],
                        modules: [...modules],
                      },
                    ]),
                      setselectedgroups([]);
                    setmodules([]);
                  }}
                />
              </Flex>
              <Text mt={5} fontSize="lg" fontWeight="bold">
                Groupes
              </Text>
              <Flex flexWrap="wrap" mt={3} mb={3} justify="space-around">
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
              <Flex
                flexWrap="wrap"
                justify="center"
                align="center"
                ml={2}
                //mt={10}
              >
                {classIcc.map((item, index) => {
                  return (
                    <ClassComponents
                      item={item}
                      key={index}
                      icc={classIcc}
                      seticc={setclassIcc}
                    />
                  );
                })}
              </Flex>

              <Text mt={5} fontSize="lg" fontWeight="bold">
                Modules
              </Text>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                placeholder="select teacher modules"
                options={options}
                onChange={(e) => setmodules(e.map((item) => item.value))}
              />

              <Flex alignItems="center" justify="center" mt={9} mb={5}>
                <ButtonGroup variant="outline" spacing="6">
                  <Button
                    colorScheme="blue"
                    onClick={() => {
                      //---------- db -----------
                      axios
                        .post("/api/teacher", {
                          teacher: {
                            name: name,
                            username: username,
                            matricule: matricule,
                            password: password,
                            class: classIcc,
                            email: email,
                            Phone: phone,
                          },
                        })
                        .then((res) => setteacherIsAdded(true));
                      //----------  ui -----------
                      setdata((prev) => [
                        ...prev,
                        {
                          name: name,
                          username: username,
                          matricule: matricule,
                          password: password,
                          Spécialité:
                            pickDuplicatespecialty(classIcc).join(","),
                          semester: pickDuplicatesemester(classIcc).join(","),
                          group: pickDuplicateGroups(classIcc).join(","),
                          email: email,
                          Phone: phone,
                        },
                      ]);
                    }}
                  >
                    Save
                  </Button>
                  <Button onClick={() => console.log(modules)}>Cancel</Button>
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
